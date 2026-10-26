
import { useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

import EnvelopeIntro from './components/EnvelopeIntro'
import HeroSlide from './components/HeroSlide'
import FormalInvitation from './components/FormalInvitation'
import EngagementVideo from './components/EngagementVideo'
import FinalSlide from './components/FinalSlide'

function ScratchReveal({ onReveal }) {
  const [revealed, setRevealed] = useState(false)
  const [scratched, setScratched] = useState(false)
  const canvasRef = useRef(null)
  const scratchCount = useRef(0)

  function scratch(event) {
    const canvas = canvasRef.current
    if (!canvas || revealed) return

    const rect = canvas.getBoundingClientRect()
    const ctx = canvas.getContext('2d')
    const x = event.clientX - rect.left
    const y = event.clientY - rect.top

    if (!scratched) setScratched(true)

    ctx.globalCompositeOperation = 'destination-out'
    ctx.beginPath()
    ctx.arc(x, y, 22, 0, Math.PI * 2)
    ctx.fill()

    scratchCount.current += 1

    if (scratchCount.current > 35) {
      setRevealed(true)
      onReveal?.()
    }
  }

  function prepareCanvas(canvas) {
    if (!canvas || canvas.dataset.ready) return

    const rect = canvas.getBoundingClientRect()
    const scale = window.devicePixelRatio || 1

    canvas.width = rect.width * scale
    canvas.height = rect.height * scale

    const ctx = canvas.getContext('2d')
    ctx.scale(scale, scale)

    ctx.fillStyle = '#c9942a'
    ctx.fillRect(0, 0, rect.width, rect.height)

    ctx.fillStyle = '#fff3d3'
    ctx.font = '18px Georgia'
    ctx.textAlign = 'center'
    ctx.fillText('✧ SCRATCH HERE ✧', rect.width / 2, rect.height / 2)

    canvas.dataset.ready = 'true'
  }

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '90vh',
        padding: '70px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        overflow: 'hidden',
        color: '#5a3200',
      }}
    >
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
        }}
      />

      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(255, 248, 235, 0.84)',
        }}
      />

      <div style={{ position: 'relative', width: '100%', maxWidth: '390px' }}>
        <p style={{ letterSpacing: '4px', color: '#a87928' }}>
          A SACRED BEGINNING
        </p>

        <h2
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '38px',
            fontWeight: 400,
          }}
        >
          Sumuhurtam
        </h2>

        <p
          lang="te"
          style={{
            fontFamily: '"Noto Sans Telugu", sans-serif',
            fontSize: '20px',
          }}
        >
          శుభ ముహూర్తం
        </p>

        <p>Scratch the golden panel to reveal our auspicious wedding time.</p>

        <p
          lang="te"
          style={{
            fontFamily: '"Noto Sans Telugu", sans-serif',
            fontSize: '14px',
            lineHeight: 1.9,
          }}
        >
          శుభ ముహూర్త సమయాన్ని తెలుసుకోవడానికి బంగారు కార్డును గీకండి.
        </p>

        <div
          style={{
            position: 'relative',
            width: '100%',
            minHeight: '280px',
            marginTop: '24px',
            border: '1px solid #c9942a',
            borderRadius: '16px',
            overflow: 'hidden',
            background: '#fffdf7',
          }}
        >
          <div
            style={{
              minHeight: '280px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '18px 14px',
              boxSizing: 'border-box',
            }}
          >
            {revealed ? (
              <>
                <p
                  style={{
                    margin: '4px',
                    letterSpacing: '2px',
                    fontSize: '22px',
                    fontFamily: 'Georgia, serif',
                  }}
                >
                  SUMUHURTAM
                </p>

                <p
                  lang="te"
                  style={{
                    fontFamily: '"Noto Sans Telugu", sans-serif',
                    fontSize: '21px',
                    margin: '4px 0 14px',
                  }}
                >
                  శుభ ముహూర్తం
                </p>

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
              <p style={{ color: '#9a7a43', fontStyle: 'italic' }}>
                Scratch to discover the details
              </p>
            )}
          </div>

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
                if (event.buttons === 1 || event.pointerType === 'touch') {
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
              }}
            />
          )}
        </div>

        <p style={{ fontSize: '13px', fontStyle: 'italic' }}>
          {scratched && !revealed
            ? 'Keep scratching to uncover the details.'
            : !revealed
              ? 'Use your finger or mouse.'
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

        <p style={{ fontSize: '15px', lineHeight: 1.9, color: '#ffffff' }}>
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
  const [dateRevealed, setDateRevealed] = useState(false)

  const musicRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  })

  function openInvitation() {
    const audio = musicRef.current

    if (audio) {
      audio.volume = musicVolume
      audio.play()
        .then(() => setMusicPlaying(true))
        .catch(() => setMusicPlaying(false))
    }

    setEnvelopeOpened(true)
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

          <div
            style={{
              position: 'fixed',
              right: '12px',
              bottom: '14px',
              zIndex: 10000,
              width: '175px',
              padding: '10px',
              boxSizing: 'border-box',
              background: '#fffaf1',
              border: '1px solid #c9942a',
              borderRadius: '12px',
              boxShadow: '0 2px 12px #0002',
            }}
          >
            <button
              type="button"
              onClick={toggleMusic}
              style={{
                width: '100%',
                padding: '8px',
                background: '#5a3200',
                color: 'white',
                border: 0,
                borderRadius: '6px',
                cursor: 'pointer',
              }}
            >
              {musicPlaying ? 'Ⅱ Pause music' : '▶ Play music'}
            </button>

            <label
              htmlFor="background-volume"
              style={{
                display: 'block',
                marginTop: '8px',
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
              onChange={(event) => changeMusicVolume(event.target.value)}
              style={{ width: '100%' }}
            />
          </div>

          <HeroSlide />

          <FormalInvitation />

          <ScratchReveal onReveal={() => setDateRevealed(true)} />

          <VenueSection />

          <EngagementVideo />

          <FinalSlide dateRevealed={dateRevealed} />
        </>
      )}
    </main>
  )
}
