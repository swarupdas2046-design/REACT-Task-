# 🎬 StreamSave — YouTube Downloader

Ek classy aur fast YouTube video downloader website — React.js frontend + Node.js backend.

---

## ✅ Features
- 720p HD video download
- 1080p Full HD video download  
- Audio only (MP3) download
- Beautiful animated dark UI
- Video info preview (thumbnail, title, channel, views)
- Clipboard paste support

---

## 🚀 Local Setup (Step by Step)

### Prerequisites (Pehle yeh install karo)

1. **Node.js** — https://nodejs.org (v18+ recommended)
2. **yt-dlp** — https://github.com/yt-dlp/yt-dlp/releases
   - Windows: `yt-dlp.exe` download karke PATH mein daalo
   - Mac/Linux: `pip install yt-dlp` ya `brew install yt-dlp`
3. **FFmpeg** — https://ffmpeg.org/download.html
   - 1080p ke liye zaroori hai
   - Windows: PATH mein add karo

---

### Step 1 — Backend Start karo

```bash
cd backend
npm install
node server.js
```

✅ Server chalega: http://localhost:5000

---

### Step 2 — Frontend Start karo

Naya terminal kholo:

```bash
cd frontend
cp .env.example .env
npm install
npm run dev
```

✅ Website chalegi: http://localhost:3000

---

## 🌐 Free Hosting (Railway + Vercel)

### Backend → Railway.app

1. https://railway.app pe account banao
2. "New Project" → "Deploy from GitHub"
3. `backend` folder ko deploy karo
4. Environment variable add karo: `PORT=5000`
5. Deployed URL copy karo (e.g. `https://xxx.railway.app`)

### Frontend → Vercel.com

1. `frontend/.env` file mein update karo:
   ```
   VITE_API_URL=https://your-backend.railway.app
   ```
2. `npm run build` chalao
3. https://vercel.com pe "Import Project" → `frontend` folder

---

## 📁 Project Structure

```
yt-downloader/
├── backend/
│   ├── server.js       ← Express API
│   ├── package.json
│   └── .env.example
└── frontend/
    ├── src/
    │   ├── App.jsx     ← Main React component
    │   ├── App.css     ← Styling + animations
    │   ├── index.css   ← Global CSS variables
    │   └── main.jsx    ← Entry point
    ├── public/
    │   └── favicon.svg
    ├── index.html
    ├── vite.config.js
    ├── package.json
    └── .env.example
```

---

## ⚠️ Important Note

Yeh tool **sirf personal use** ke liye hai. Copyrighted content ko distribute mat karo. YouTube ke Terms of Service ka dhyan rakho.

---

Made with ❤️ using React.js + Node.js + yt-dlp
