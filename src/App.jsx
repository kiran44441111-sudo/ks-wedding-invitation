import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

import EnvelopeIntro from './components/EnvelopeIntro'
import HeroSlide from './components/HeroSlide'
import FormalInvitation from './components/FormalInvitation'
import EngagementVideo from './components/EngagementVideo'
import FinalSlide from './components/FinalSlide'

function ScratchReveal({ onReveal }) {
  const [revealed, setRevealed] = useState(false)
  const [scratched, setScratched] = useState(false)
  const [sparkles, setSparkles] = useState([])
  const canvasRef = useRef(null)
  const scratchCount = useRef(0)
  const sparkleId = useRef(0)
  const lastSparkleTime = useRef(0)
  const revealedRef = useRef(false)

  function scratch(event) {
    const canvas = canvasRef.current
    if (!canvas || revealedRef.current) return

    const rect = canvas.getBoundingClientRect()
    const ctx = canvas.getContext('2d')
    const scaleX = canvas.width / rect.width
    const scaleY = canvas.height / rect.height
    const x = (event.clientX - rect.left) * scaleX
    const y = (event.clientY - rect.top) * scaleY

    if (!scratched) setScratched(true)

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 24 * scaleX, 0, Math.PI * 2)
    ctx.fill()
    ctx.globalCompositeOperation = 'source-over'

    const now = Date.now()

    if (now - lastSparkleTime.current > 45) {
      lastSparkleTime.current = now

      const particles = Array.from({ length: 4 }, () => ({
        id: ++sparkleId.current,
        x: event.clientX - rect.left + (Math.random() - 0.5) * 45,
        y: event.clientY - rect.top + (Math.random() - 0.5) * 45,
        size: 5 + Math.random() * 10,
      }))

      setSparkles((previous) => [...previous, ...particles].slice(-70))

      window.setTimeout(() => {
        const expired = new Set(particles.map((item) => item.id))
        setSparkles((previous) =>
          previous.filter((item) => !expired.has(item.id))
        )
      }, 700)
    }

    scratchCount.current += 1

    if (scratchCount.current > 65) {
      revealedRef.current = true
      setRevealed(true)
      onReveal?.()
    }
  }

  function prepareCanvas(canvas) {
    if (!canvas || canvas.dataset.ready) return

    const rect = canvas.getBoundingClientRect()
    const scale = window.devicePixelRatio || 1

    canvas.width = Math.round(rect.width * scale)
    canvas.height = Math.round(rect.height * scale)

    const ctx = canvas.getContext('2d')
    ctx.scale(scale, scale)

    const gradient = ctx.createLinearGradient(
      0, 0, rect.width, rect.height
    )

    gradient.addColorStop(0, '#520416')
    gradient.addColorStop(0.45, '#950e2d')
    gradient.addColorStop(1, '#4a0616')

    ctx.fillStyle = gradient
    ctx.fillRect(0, 0, rect.width, rect.height)

    // Gold ornamental border
    ctx.strokeStyle = '#e7c576'
    ctx.lineWidth = 2
    ctx.strokeRect(12, 12, rect.width - 24, rect.height - 24)

    ctx.strokeStyle = 'rgba(231, 197, 118, 0.8)'
    ctx.lineWidth = 1
    ctx.strokeRect(19, 19, rect.width - 38, rect.height - 38)

    // Envelope folds
    ctx.beginPath()
    ctx.moveTo(20, 25)
    ctx.lineTo(rect.width / 2, rect.height * 0.55)
    ctx.lineTo(rect.width - 20, 25)

    ctx.moveTo(20, rect.height - 24)
    ctx.lineTo(rect.width / 2, rect.height * 0.62)
    ctx.lineTo(rect.width - 20, rect.height - 24)
    ctx.stroke()

    // Central royal wax seal
    const centerX = rect.width / 2
    const centerY = rect.height / 2

    ctx.beginPath()
    ctx.arc(centerX, centerY, 38, 0, Math.PI * 2)
    ctx.fillStyle = '#70091f'
    ctx.fill()
    ctx.strokeStyle = '#f3d58a'
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.beginPath()
    ctx.arc(centerX, centerY, 30, 0, Math.PI * 2)
    ctx.strokeStyle = '#d8ae59'
    ctx.lineWidth = 1
    ctx.stroke()

    ctx.fillStyle = '#ffe6a3'
    ctx.font = '30px Georgia, serif'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle'
    ctx.fillText('✦', centerX, centerY)

    ctx.fillStyle = '#ffe8ad'
    ctx.font = 'bold 12px Georgia, serif'
    ctx.textBaseline = 'alphabetic'
    ctx.fillText(
      'SCRATCH TO REVEAL',
      rect.width / 2,
      rect.height - 43
    )

    ctx.font = '19px Georgia, serif'
    ctx.fillText('❦', rect.width / 2, 47)

    canvas.dataset.ready = 'true'
  }

  return (
    <section
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '560px',
        padding: '12px 18px 42px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        overflow: 'hidden',
        color: '#5a3200',
        isolation: 'isolate',
        background: '#f8ead4',
      }}
    >
      {/* Full-page looping video background */}
      <video
        src="/scratch.mp4"
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          zIndex: -3,
          pointerEvents: 'none',
        }}
      />

      {/* Couple photo blended over the video */}
      <img
        src="/couple-3.jpeg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
          opacity: 0.48,
          zIndex: -2,
          pointerEvents: 'none',
        }}
      />

      {/* Soft transparent wash */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 245, 226, 0.38)',
          zIndex: -1,
          pointerEvents: 'none',
        }}
      />

      {/* HEADING: FIXED AT THE TOP */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '390px',
          flexShrink: 0,
          textAlign: 'center',
          margin: 0,
          padding: 0,
        }}
      >
        <p
          style={{
            letterSpacing: '4px',
            color: '#022955',
            fontSize: '14px',
            fontWeight: 600,
            margin: '0 0 4px',
            padding: 0,
          }}
        >
          A SACRED BEGINNING
        </p>

        <h2
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(34px, 8vw, 46px)',
            fontWeight: 400,
            color: '#860660',
            margin: 0,
            padding: 0,
            lineHeight: 1.1,
          }}
        >
          Sumuhurtam
        </h2>

        <p
          lang="te"
          style={{
            fontFamily: '"Noto Sans Telugu", sans-serif',
            fontSize: 'clamp(24px, 6vw, 30px)',
            color: '#3a0303',
            margin: '2px 0 0',
            padding: 0,
            lineHeight: 1.2,
          }}
        >
          శుభ ముహూర్తం
        </p>
      </div>

      {/* FLEXIBLE SPACE: KEEPS THE COUPLE VISIBLE */}
      <div
        aria-hidden="true"
        style={{
          flex: '1 1 auto',
          minHeight: '10px',
        }}
      />

      {/* SCRATCH CARD: SLIGHTLY ABOVE THE BOTTOM */}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '390px',
          flexShrink: 0,
          margin: 0,
          padding: 0,
        }}
      >
        <div
          style={{
            position: 'relative',
            width: '100%',
            height: 'min(280px, 34svh)',
            minHeight: '220px',
            border: '2px solid #c9942a',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#fff8e8',
            boxShadow: '0 12px 35px rgba(58, 4, 20, 0.25)',
            boxSizing: 'border-box',
          }}
        >
          {/* Revealed wedding details */}
          <div
            style={{
              height: '100%',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '18px 14px',
              boxSizing: 'border-box',
              background: 'linear-gradient(135deg, #fff9ec, #f4dfb8)',
              color: '#641329',
            }}
          >
            {revealed ? (
              <>
                <p
                  style={{
                    margin: '4px',
                    letterSpacing: '2px',
                    fontSize: '19px',
                    fontFamily: 'Georgia, serif',
                    color: '#a87928',
                  }}
                />

                <p
                  style={{
                    fontSize: '17px',
                    lineHeight: 1.8,
                    fontWeight: 600,
                    margin: '8px 0 12px',
                  }}
                >
                  On Saturday, 21st November 2026,
                  <br />
                  at 10:04 A.M.
                  <br />
                  "DHANUR LAGNAM"
                </p>

                <p
                  lang="te"
                  style={{
                    fontFamily: '"Noto Sans Telugu", sans-serif',
                    fontSize: '12px',
                    lineHeight: 2,
                    margin: '8px 0',
                    overflowWrap: 'anywhere',
                  }}
                >
                  స్వస్తిశ్రీ చాంద్రమాన పరాభవ నామ సంవత్సర కార్తీక మాసం
                  శుద్ధ ద్వాదశి శనివారం సరియగు తేది 21-11-2026 రోజున
                  ఉ॥గం॥ 10:04 ని॥లకు రేవతి నక్షత్రయుక్త శుభ ధనుర్ లగ్న
                  పుష్కరాంశ సుముహూర్తమున
                </p>
              </>
            ) : (
              <p
                style={{
                  color: '#9a7a43',
                  fontStyle: 'italic',
                  margin: 0,
                }}
              >
                Your special moment awaits…
              </p>
            )}
          </div>

          {/* Scratching layer */}
          {!revealed && (
            <canvas
              ref={(canvas) => {
                canvasRef.current = canvas
                if (canvas) prepareCanvas(canvas)
              }}
              onPointerDown={(event) => {
                event.currentTarget.setPointerCapture(event.pointerId)
                scratch(event)
              }}
              onPointerMove={(event) => {
                if (
                  event.buttons === 1 ||
                  event.pointerType === 'touch'
                ) {
                  scratch(event)
                }
              }}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                touchAction: 'none',
                cursor: 'crosshair',
                zIndex: 2,
              }}
            />
          )}

          {/* Golden scratching sparkles */}
          {!revealed &&
            sparkles.map((sparkle) => (
              <span
                key={sparkle.id}
                aria-hidden="true"
                style={{
                  position: 'absolute',
                  left: sparkle.x,
                  top: sparkle.y,
                  width: sparkle.size,
                  height: sparkle.size,
                  color: '#ffe7a0',
                  fontSize: sparkle.size + 4,
                  lineHeight: 1,
                  pointerEvents: 'none',
                  zIndex: 3,
                  textShadow: '0 0 5px #fff2bd, 0 0 12px #ffca4b',
                  transform: 'translate(-50%, -50%)',
                }}
              >
                ✦
              </span>
            ))}
        </div>

        <p
          style={{
            fontSize: '13px',
            fontStyle: 'italic',
            lineHeight: 1.5,
            textAlign: 'center',
            margin: '5px 0 0',
            color: '#5a3200',
          }}
        >
          {scratched && !revealed
            ? 'Keep scratching to uncover the details.'
            : !revealed
              ? 'Use your finger or mouse to scratch the envelope.'
              : 'We look forward to celebrating with you!'}
        </p>
      </div>
    </section>
  )
}

function VenueSection() {
  const mapsUrl = 'https://share.google/C02Hfrhb9gGRkPUGA'

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '75vh',
        padding: '70px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        textAlign: 'center',
        color: '#fff4e5',
      }}
    >
      <img
        src="/couple-4.jpeg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(32, 18, 20, 0.62)',
        }}
      />

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '390px',
          padding: '30px 20px',
          boxSizing: 'border-box',
          background: 'rgba(35, 20, 28, 0.78)',
          border: '1px solid #c9942a',
          borderRadius: '16px',
        }}
      >
        <h2
          style={{
            fontFamily: 'Georgia, serif',
            fontWeight: 400,
            fontSize: '32px',
            color: '#ffffff',
          }}
        >
          📍 VENUE
        </h2>

        <p
          lang="te"
          style={{
            fontFamily: '"Noto Sans Telugu", sans-serif',
            fontSize: '22px',
            color: '#ffffff',
          }}
        >
          వేదిక
        </p>

        <h3 style={{ color: '#e2bd7a', fontSize: '21px' }}>
          Subham A/C Banquet Hall
        </h3>

        <p
          style={{
            fontSize: '15px',
            lineHeight: 1.9,
            color: '#ffffff',
          }}
        >
          2nd Floor, Magadha Towers, H. No. 1,
          Opposite Union Bank, Zamistanpur,
          Ramnagar, Hyderabad, Telangana – 500044.
        </p>

        <a
          href={mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'inline-block',
            marginTop: '16px',
            padding: '12px 18px',
            color: '#4a2c13',
            background: '#e2bd7a',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold',
            cursor: 'pointer',
          }}
        >
          📍 View Location on Maps / లొకేషన్ చూడండి
        </a>
      </div>
    </section>
  )
}

export default function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [musicVolume, setMusicVolume] = useState(0.35)
  const [musicControlsOpen, setMusicControlsOpen] = useState(false)
  const resumeMusicOnReturn = useRef(false)
  const [dateRevealed, setDateRevealed] = useState(false)
  const musicRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  })

  function openInvitation() {
    const audio = musicRef.current
    setEnvelopeOpened(true)

    if (audio) {
      audio.volume = musicVolume
      audio.play()
        .then(() => setMusicPlaying(true))
        .catch(() => setMusicPlaying(false))
    }
  }

  function toggleMusic() {
    const audio = musicRef.current
    if (!audio) return

    if (audio.paused) {
      audio.volume = musicVolume
      audio.play()
        .then(() => setMusicPlaying(true))
        .catch(() => setMusicPlaying(false))
    } else {
      audio.pause()
      setMusicPlaying(false)
    }
  }

  function changeMusicVolume(value) {
    const volume = Number(value)
    setMusicVolume(volume)

    if (musicRef.current) {
      musicRef.current.volume = volume
    }
  }

  useEffect(() => {
    function handleVisibilityChange() {
      const audio = musicRef.current
      if (!audio) return

      if (document.visibilityState === 'hidden') {
        resumeMusicOnReturn.current = !audio.paused

        if (!audio.paused) {
          audio.pause()
        }
      } else if (resumeMusicOnReturn.current && envelopeOpened) {
        resumeMusicOnReturn.current = false
        audio.volume = musicVolume
        audio.play().catch(() => setMusicPlaying(false))
      }
    }

    document.addEventListener('visibilitychange', handleVisibilityChange)

    return () => {
      document.removeEventListener(
        'visibilitychange',
        handleVisibilityChange
      )
    }
  }, [envelopeOpened, musicVolume])

  return (
    <main
      style={{
        maxWidth: '430px',
        margin: '0 auto',
        background: '#fdf8f0',
        color: '#1a0800',
        overflowX: 'hidden',
        minHeight: '100vh',
      }}
    >
      <audio
        ref={musicRef}
        src="/wedding-music.mp3"
        loop
        preload="auto"
        onPlay={() => setMusicPlaying(true)}
        onPause={() => setMusicPlaying(false)}
      />

      {!envelopeOpened ? (
        <EnvelopeIntro onComplete={openInvitation} />
      ) : (
        <>
          <motion.div
            style={{
              position: 'fixed',
              top: 0,
              right: 0,
              width: '3px',
              height: '100vh',
              background: 'linear-gradient(180deg, #c9942a, #f0d080)',
              transformOrigin: 'top',
              scaleY,
              zIndex: 9999,
            }}
          />

          {/* Music controls */}
          <div
            style={{
              position: 'fixed',
              right: '14px',
              bottom: '18px',
              zIndex: 10000,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'flex-end',
              gap: '8px',
            }}
          >
            {musicControlsOpen && (
              <div
                style={{
                  width: '190px',
                  padding: '12px',
                  boxSizing: 'border-box',
                  background: '#fffaf1',
                  border: '1px solid #c9942a',
                  borderRadius: '12px',
                  boxShadow: '0 3px 16px #0003',
                  color: '#3b2417',
                }}
              >
                <button
                  type="button"
                  onClick={toggleMusic}
                  style={{
                    width: '100%',
                    padding: '9px 8px',
                    background: '#5a3200',
                    color: 'white',
                    border: 0,
                    borderRadius: '7px',
                    cursor: 'pointer',
                  }}
                >
                  {musicPlaying ? 'Ⅱ Pause music' : '▶ Play music'}
                </button>

                <label
                  htmlFor="background-volume"
                  style={{
                    display: 'block',
                    marginTop: '9px',
                    marginBottom: '4px',
                    fontSize: '12px',
                  }}
                >
                  Music volume: {Math.round(musicVolume * 100)}%
                </label>

                <input
                  id="background-volume"
                  type="range"
                  min="0"
                  max="1"
                  step="0.05"
                  value={musicVolume}
                  onChange={(event) =>
                    changeMusicVolume(event.target.value)
                  }
                  style={{ width: '100%', cursor: 'pointer' }}
                />
              </div>
            )}

            <button
              type="button"
              aria-label={
                musicControlsOpen
                  ? 'Close music controls'
                  : 'Open music controls'
              }
              aria-expanded={musicControlsOpen}
              onClick={() =>
                setMusicControlsOpen((open) => !open)
              }
              title="Music controls"
              style={{
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                border: '1px solid #e2bd7a',
                background: '#5a3200',
                color: '#fff4d6',
                boxShadow: '0 2px 10px #0003',
                fontSize: '23px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {musicPlaying ? '♫' : '♪'}
            </button>
          </div>

          <HeroSlide />

          <FormalInvitation />

          <ScratchReveal
            onReveal={() => setDateRevealed(true)}
          />

          <VenueSection />

          <EngagementVideo />

          <FinalSlide dateRevealed={dateRevealed} />
        </>
      )}
    </main>
  )
}