
import { motion } from 'framer-motion'
import { useState, useEffect, useRef } from 'react'

export default function EnvelopeIntro({ onComplete }) {
  const [opened, setOpened] = useState(false)
  const musicRef = useRef(null)

  

  const handleTap = async () => {
    if (opened) return

    setOpened(true)

    // Start the background music when the guest taps the envelope.
    try {
      if (musicRef.current) {
        await musicRef.current.play()
      }
    } catch (error) {
      console.log('Background music could not start:', error)
    }

    // Play the envelope-opening animation.
    setTimeout(() => {
      sessionStorage.setItem('invited', 'true')
      onComplete()
    }, 2000)
  }

  return (
    <div
      onClick={handleTap}
      style={{
        position: 'fixed',
        inset: 0,
        background: '#f5ece0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        zIndex: 9999,
        padding: '20px',
        boxSizing: 'border-box',
      }}
    >
      {/* Background music: begins after the guest taps the envelope. */}
      <audio
        ref={musicRef}
        src="/wedding-music.mp3"
        loop
        preload="auto"
      />

      <motion.img
        src="/envelope.jpeg"
        alt="Wedding invitation envelope"
        style={{
          width: 'min(80vw, 420px)',
          maxHeight: '65vh',
          objectFit: 'contain',
        }}
        animate={
          opened
            ? { y: 80, opacity: 0, scale: 0.9 }
            : { y: [0, -8, 0] }
        }
        transition={
          opened
            ? { duration: 0.8 }
            : { duration: 2, repeat: Infinity }
        }
      />

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: opened ? 0 : 1 }}
        style={{
          color: '#7b263a',
          fontFamily: 'Georgia, serif',
          fontSize: '18px',
          marginTop: '24px',
          textAlign: 'center',
        }}
      >
        {opened
          ? 'Opening your invitation…'
          : 'Tap to open your invitation'}
      </motion.p>

      {!opened && (
        <p
          style={{
            color: '#7b263a',
            fontSize: '12px',
            marginTop: '8px',
            textAlign: 'center',
          }}
        >
          Tap to enter with music
        </p>
      )}
    </div>
  )
}
