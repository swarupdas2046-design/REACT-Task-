const express = require('express');
const cors    = require('cors');
const YTDlpWrap = require('yt-dlp-wrap').default;
const path    = require('path');
const fs      = require('fs');
const os      = require('os');

const app   = express();
const PORT  = process.env.PORT || 5000;
const ytDlp = new YTDlpWrap();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.json({ status: 'ok', message: 'SnapTube Pro API running 🚀' });
});

app.post('/api/info', async (req, res) => {
  const { url } = req.body;
  if (!url || (!url.includes('youtube.com') && !url.includes('youtu.be'))) {
    return res.status(400).json({ error: 'Please enter a valid YouTube URL.' });
  }
  try {
    const info = await ytDlp.getVideoInfo(url);
    res.json({
      title:      info.title,
      thumbnail:  info.thumbnail,
      duration:   info.duration_string,
      channel:    info.channel,
      views:      info.view_count ? Number(info.view_count).toLocaleString('en-IN') : 'N/A',
      uploadDate: info.upload_date
        ? `${info.upload_date.slice(6,8)}/${info.upload_date.slice(4,6)}/${info.upload_date.slice(0,4)}`
        : 'N/A',
    });
  } catch (err) {
    console.error('Info error:', err.message);
    res.status(500).json({ error: 'Could not fetch video info. Check the URL.' });
  }
});

app.get('/api/download', async (req, res) => {
  const { url, quality } = req.query;
  if (!url) return res.status(400).json({ error: 'URL is required.' });

  const tmpBase = path.join(os.tmpdir(), `snaptube_${Date.now()}`);

  try {
    let args, outFile, mime, ext;

    if (quality === 'audio') {
      ext     = 'mp3';
      mime    = 'audio/mpeg';
      outFile = `${tmpBase}.mp3`;
      args = [
        url,
        '--no-playlist',
        '-f', 'bestaudio/best',
        '-x',
        '--audio-format', 'mp3',
        '--audio-quality', '0',
        '-o', outFile,
      ];
    } else {
      // Video — use format that already has audio+video in single file
      // This avoids FFmpeg merge issues on Windows
      ext     = 'mp4';
      mime    = 'video/mp4';
      outFile = `${tmpBase}.mp4`;

      const height = quality === '1080p' ? 1080 : 720;

      args = [
        url,
        '--no-playlist',
        // First try: single file with both video+audio (no merge needed)
        // Fallback: best progressive mp4
        '-f', `best[height<=${height}][ext=mp4]/best[height<=${height}]/bestvideo[height<=${height}][ext=mp4]+bestaudio[ext=m4a]/bestvideo[height<=${height}]+bestaudio/best`,
        '-o', outFile,
        // Force mp4 container
        '--recode-video', 'mp4',
      ];
    }

    console.log(`⬇ Downloading [${quality}]...`);
    await ytDlp.execPromise(args);

    // Find the actual output file
    let finalFile = outFile;
    if (!fs.existsSync(finalFile)) {
      const dir   = os.tmpdir();
      const base  = path.basename(tmpBase);
      const files = fs.readdirSync(dir).filter(f => f.startsWith(base));
      if (files.length > 0) finalFile = path.join(dir, files[0]);
    }

    if (!finalFile || !fs.existsSync(finalFile)) {
      return res.status(500).json({ error: 'Download failed. Please try again.' });
    }

    const stat = fs.statSync(finalFile);
    console.log(`✅ Ready: ${finalFile} (${(stat.size/1024/1024).toFixed(1)} MB)`);

    res.setHeader('Content-Disposition', `attachment; filename="snaptube_${quality}_${Date.now()}.${ext}"`);
    res.setHeader('Content-Type', mime);
    res.setHeader('Content-Length', stat.size);
    res.setHeader('Cache-Control', 'no-cache');

    const stream = fs.createReadStream(finalFile);
    stream.pipe(res);
    stream.on('close', () => fs.unlink(finalFile, () => {}));
    res.on('error',    () => fs.unlink(finalFile, () => {}));

  } catch (err) {
    console.error('Download error:', err.message);
    if (!res.headersSent) {
      res.status(500).json({ error: 'Download failed. Please try again.' });
    }
  }
});

app.listen(PORT, () => {
  console.log(`\n✅ SnapTube Pro running on http://localhost:${PORT}\n`);
});
