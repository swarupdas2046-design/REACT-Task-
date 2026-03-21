import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './App.css'

const API = 'https://snaptube-pro-backend-crur.onrender.com'
// ── Theme Toggle Button ──────────────────────────────────────
function ThemeToggle({ dark, onToggle }) {
  return (
    <button className="theme-toggle" onClick={onToggle} title={dark ? 'Switch to Light' : 'Switch to Dark'}>
      <span className={`toggle-track ${dark ? 'dark' : 'light'}`}>
        <span className="toggle-thumb">
          {dark
            ? <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            : <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
          }
        </span>
      </span>
    </button>
  )
}

// ── Grid Background (dark) ───────────────────────────────────
function GridBg() {
  // dark background
  return (
    <div className="grid-bg" aria-hidden="true">
      <div className="grid-lines" />
      <div className="grid-glow-1" />
      <div className="grid-glow-2" />
      <div className="grid-glow-3" />
    </div>
  )
}

// ── Light Background ─────────────────────────────────────────
function LightBg() {
  return (
    <div className="light-bg" aria-hidden="true">
      <div className="light-orb-1" />
      <div className="light-orb-2" />
      <div className="light-orb-3" />
      <div className="light-dots" />
    </div>
  )
}

// ── Logo Mark ────────────────────────────────────────────────
function LogoMark({ size = 38, dark }) {
  return (
    <svg width={size} height={size} viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg" className="logo-svg">
      <rect width="38" height="38" rx="11"
        fill={dark ? '#0d0d16' : '#ffffff'}
        stroke={dark ? 'rgba(0,229,195,0.25)' : 'rgba(0,180,150,0.3)'}
        strokeWidth="1"/>
      <path d="M9,13 Q9,9 13,9 L21,9 Q25,9 25,13 Q25,17 13,18.5 Q9,19.5 9,23.5 Q9,28 13,28 L29,28"
        stroke="url(#lg)" strokeWidth="2.4" strokeLinecap="round" fill="none"/>
      <defs>
        <linearGradient id="lg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#00c9a7"/>
          <stop offset="100%" stopColor="#00e5c3"/>
        </linearGradient>
      </defs>
    </svg>
  )
}

// ── Quality Option ───────────────────────────────────────────
function QualityOption({ value, label, sub, active, onClick }) {
  return (
    <button className={`q-opt ${active ? 'active' : ''}`} onClick={() => onClick(value)}>
      <span className="q-opt-label">{label}</span>
      <span className="q-opt-sub">{sub}</span>
      {active && <span className="q-check-dot" />}
    </button>
  )
}

// ── Toast ────────────────────────────────────────────────────
function Toast({ msg, type }) {
  return (
    <div className={`toast toast-${type}`}>
      <span className="toast-icon">{type === 'success' ? '✓' : '!'}</span>
      <span>{msg}</span>
    </div>
  )
}

// ── Stat Chip ─────────────────────────────────────────────────
function StatChip({ icon, label }) {
  return (
    <span className="stat-chip">
      <span className="stat-icon">{icon}</span>
      {label}
    </span>
  )
}

// ── Main App ─────────────────────────────────────────────────
export default function App() {
  const [url, setUrl]           = useState('')
  const [quality, setQuality]   = useState('720p')
  const [info, setInfo]         = useState(null)
  const [loading, setLoading]   = useState(false)
  const [dlActive, setDlActive] = useState(false)
  const [toast, setToast]       = useState(null)
  const [ready, setReady]       = useState(false)
  const [dark, setDark]         = useState(true)
  const inputRef = useRef(null)

  useEffect(() => { setTimeout(() => setReady(true), 80) }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light')
  }, [dark])

  const showToast = (msg, type = 'error') => {
    setToast({ msg, type })
    setTimeout(() => setToast(null), 3500)
  }

  const fetchInfo = async () => {
    const val = url.trim()
    if (!val) { inputRef.current?.focus(); return }
    if (!val.includes('youtube.com') && !val.includes('youtu.be')) {
      showToast('Please enter a valid YouTube URL.')
      return
    }
    setLoading(true)
    setInfo(null)
    try {
      const { data } = await axios.post(`${API}/api/info`, { url: val })
      setInfo(data)
    } catch (e) {
      showToast(e.response?.data?.error || 'Could not fetch video. Check the URL.')
    }
    setLoading(false)
  }

  const handleDownload = () => {
    if (!url || !info) return
    setDlActive(true)
    const a = document.createElement('a')
    a.href = `${API}/api/download?url=${encodeURIComponent(url.trim())}&quality=${quality}`
    a.download = ''
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    setTimeout(() => {
      setDlActive(false)
      showToast('Download started successfully.', 'success')
    }, 1800)
  }

  const pasteFromClipboard = async () => {
    try {
      const t = await navigator.clipboard.readText()
      setUrl(t)
      setTimeout(fetchInfo, 120)
    } catch { inputRef.current?.focus() }
  }

  const fmtViews = (v) => {
    if (!v || v === 'N/A') return 'N/A'
    const n = parseInt(v.replace(/,/g, ''))
    if (n >= 1e9) return (n/1e9).toFixed(1)+'B views'
    if (n >= 1e6) return (n/1e6).toFixed(1)+'M views'
    if (n >= 1e3) return (n/1e3).toFixed(0)+'K views'
    return v+' views'
  }

  return (
    <div className={`root ${ready ? 'ready' : ''} ${dark ? 'theme-dark' : 'theme-light'}`}>
      {dark ? <GridBg /> : <LightBg />}

      <div className="shell">

        {/* ── NAV ── */}
        <nav className="nav a1">
          <div className="nav-brand">
            <LogoMark size={36} dark={dark} />
            <span className="nav-name">
              Snap<span className="accent-word">Tube</span>
              <span className="nav-pro">PRO</span>
            </span>
          </div>
          <div className="nav-right">
            <span className="nav-by">by Swaarup Das</span>
            <ThemeToggle dark={dark} onToggle={() => setDark(d => !d)} />
          </div>
        </nav>

        {/* ── HERO ── */}
        <section className="hero a2">
          <div className="hero-eyebrow">
            <span className="dot-pulse" />
            Free · Fast · No Ads
          </div>
          <h1 className="hero-title">
            Download Any<br />
            <span className="hero-grad">YouTube Video</span>
          </h1>
          <p className="hero-sub">
            Save videos in 720p, 1080p Full HD, or extract audio — instantly.
          </p>
        </section>

        {/* ── SEARCH ── */}
        <div className="search-zone a3">
          <div className={`search-bar ${loading ? 'loading' : ''}`}>
            <svg className="search-icon" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
            </svg>
            <input
              ref={inputRef}
              className="search-input"
              type="text"
              placeholder="Paste YouTube URL here..."
              value={url}
              onChange={e => setUrl(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && fetchInfo()}
            />
            <button className="paste-btn" onClick={pasteFromClipboard} title="Paste from clipboard">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="9" y="9" width="13" height="13" rx="2"/>
                <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/>
              </svg>
            </button>
          </div>
          <button className="analyze-btn" onClick={fetchInfo} disabled={loading}>
            {loading
              ? <><Spinner /><span>Analyzing...</span></>
              : <><span>Analyze Video</span><ArrowRight /></>
            }
          </button>
        </div>

        {/* ── VIDEO RESULT ── */}
        {info && (
          <div className="result-card a-in">
            <div className="thumb-panel">
              <img src={info.thumbnail} alt={info.title} className="thumb-img" />
              <div className="thumb-veil">
                {/* <span className="play-pill">▶ Preview</span> */}
              </div>
              <span className="dur-tag">{info.duration}</span>
            </div>
            <div className="result-body">
              <p className="result-channel">{info.channel}</p>
              <h2 className="result-title">{info.title}</h2>
              <div className="result-meta">
                <StatChip icon="👁" label={fmtViews(info.views)} />
                <StatChip icon="📅" label={info.uploadDate} />
              </div>
              <div className="quality-block">
                <p className="block-label">Select Quality</p>
                <div className="quality-row">
                  <QualityOption value="720p"  label="720p"  sub="HD"      active={quality==='720p'}  onClick={setQuality} />
                  <QualityOption value="1080p" label="1080p" sub="Full HD" active={quality==='1080p'} onClick={setQuality} />
                  <QualityOption value="audio" label="Audio" sub="MP3"     active={quality==='audio'} onClick={setQuality} />
                </div>
              </div>
              <button className={`dl-btn ${dlActive ? 'active' : ''}`} onClick={handleDownload} disabled={dlActive}>
                {dlActive
                  ? <><Spinner white /><span>Starting download...</span></>
                  : <>
                      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/>
                        <polyline points="7 10 12 15 17 10"/>
                        <line x1="12" y1="15" x2="12" y2="3"/>
                      </svg>
                      <span>Download · {quality === 'audio' ? 'MP3' : quality + ' MP4'}</span>
                    </>
                }
              </button>
            </div>
          </div>
        )}

        {/* ── FEATURES ── */}
        {!info && !loading && (
          <div className="features a4">
            {[
              { t: '720p HD',       d: 'Crystal clear video',     n: '01' },
              { t: '1080p Full HD', d: 'Ultra sharp & detailed',  n: '02' },
              { t: 'MP3 Audio',     d: 'Extract audio only',      n: '03' },
              { t: 'Fast & Free',   d: 'No sign-up, no limits',   n: '04' },
            ].map((f, i) => (
              <div className="feat-card" key={i} style={{ animationDelay: `${0.45 + i * 0.08}s` }}>
                <span className="feat-num">{f.n}</span>
                <strong className="feat-title">{f.t}</strong>
                <span className="feat-desc">{f.d}</span>
              </div>
            ))}
          </div>
        )}

        {/* ── FOOTER ── */}
        <footer className="footer a5">
          <span>© 2025 SnapTube Pro · Built by <strong>Swaarup Das</strong></span>
          <span className="footer-dot">·</span>
          <span>For personal use only</span>
        </footer>
      </div>

      {toast && <Toast msg={toast.msg} type={toast.type} />}
    </div>
  )
}

function Spinner({ white }) {
  return <span className={`spin ${white ? 'spin-w' : ''}`} />
}
function ArrowRight() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" className="arrow-svg">
      <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
    </svg>
  )
}
