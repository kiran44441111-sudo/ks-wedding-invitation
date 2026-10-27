
import { useRef, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'

import EnvelopeIntro from './components/EnvelopeIntro'
import HeroSlide from './components/HeroSlide'
import EventSlide from './components/EventSlide'
import EngagementVideo from './components/EngagementVideo'
import FinalSlide from './components/FinalSlide'

function ScratchReveal() {
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
    ctx.fillText('✧  SCRATCH HERE  ✧', rect.width / 2, rect.height / 2)

    canvas.dataset.ready = 'true'
  }

  return (
    <section
      style={{
        minHeight: '90vh',
        padding: '70px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: 'linear-gradient(#fffaf1, #f2e1c8)',
        color: '#5a3200',
      }}
    >
      <p style={{ letterSpacing: '4px', color: '#a87928' }}>
        A SACRED BEGINNING
      </p>

      <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '38px', fontWeight: 400 }}>
        Sumuhurtam
      </h2>

      <p>Scratch the golden panel to reveal our auspicious wedding time.</p>

      <div
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '340px',
          minHeight: '170px',
          marginTop: '24px',
          border: '1px solid #c9942a',
          borderRadius: '16px',
          overflow: 'hidden',
          background: '#fffdf7',
        }}
      >
        <div
          style={{
            minHeight: '170px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '16px',
            boxSizing: 'border-box',
          }}
        >
          <p style={{ margin: '4px' }}>OUR WEDDING DAY</p>
          <h3 style={{ fontSize: '26px', margin: '8px' }}>
            21 November 2026
          </h3>
          <p style={{ fontSize: '20px', margin: '6px' }}>
            10:04 AM IST
          </p>
          <p style={{ fontStyle: 'italic', margin: '6px' }}>
            Subham A/C Banquet Hall
          </p>
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

      {revealed && (
        <p style={{ color: '#8a3048', fontWeight: 'bold' }}>
          We look forward to celebrating with you!
        </p>
      )}

      <p style={{ fontSize: '13px', fontStyle: 'italic' }}>
        {scratched ? 'Keep scratching to uncover the details.' : 'Use your finger or mouse.'}
      </p>
    </section>
  )
}

export default function App() {
  const [envelopeOpened, setEnvelopeOpened] = useState(false)
  const [musicPlaying, setMusicPlaying] = useState(false)
  const [musicVolume, setMusicVolume] = useState(0.35)
  const musicRef = useRef(null)

  const { scrollYProgress } = useScroll()
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
  })

  function openInvitation() {
    const audio = musicRef.current

    // This function must be called directly from the envelope click
    // for browsers to allow background music playback.
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
              style={{ display: 'block', marginTop: '8px', fontSize: '12px' }}
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

          {/* Page 2: Invitation and venue */}
          <HeroSlide />

          <EventSlide
            label="OUR WEDDING DAY"
            heading="The Wedding"
            headingColor="#5a3200"
            description="With the blessings of our families, we invite you to celebrate our special day."
            date="21 November 2026"
            time="10:04 AM"
            venue="Subham A/C Banquet Hall, 2nd Floor, Magadha Towers, H.No. 1, opposite Union Bank, Zamistanpur, Ramnagar, Hyderabad, Telangana 500044"
            dressCode="Traditional attire"
            mapsUrl="https://maps.app.goo.gl/6yiKNUjqboTfZ7PCA"
          />

          {/* Page 3: Scratch to reveal Sumuhurtam */}
          <ScratchReveal />

          {/* Page 4: Engagement video */}
          <EngagementVideo />

          {/* Page 5: Thank-you message and countdown */}
          <FinalSlide />
        </>
      )}
    </main>
  )
}
