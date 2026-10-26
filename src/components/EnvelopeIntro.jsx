
import { motion } from 'framer-motion'
import { useState, useRef } from 'react'

export default function EnvelopeIntro({ onComplete }) {
  const [opened, setOpened] = useState(false)
  const musicRef = useRef(null)

  const handleTap = async () => {
    if (opened) return

    setOpened(true)

    // Start music from the guest's tap.
    try {
      if (musicRef.current) {
        await musicRef.current.play()
      }
    } catch (error) {
      console.log('Background music could not start:', error)
    }

    // Let the scroll animation finish before moving to the invitation.
    setTimeout(() => {
      sessionStorage.setItem('invited', 'true')
      onComplete()
    }, 1400)
  }

  return (
    <motion.div
      onClick={handleTap}
      initial={{ opacity: 0 }}
      animate={{ opacity: opened ? 0 : 1 }}
      transition={{ duration: opened ? 0.7 : 0.8 }}
      style={{
        position: 'fixed',
        inset: 0,
        background:
          'radial-gradient(ellipse at center, #4b1720 0%, #250b10 70%, #160609 100%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: opened ? 'default' : 'pointer',
        zIndex: 9999,
        padding: '24px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        perspective: '1200px',
      }}
    >
      <audio
        ref={musicRef}
        src="/wedding-music.mp3"
        loop
        preload="auto"
      />

      {/* Gentle golden glow */}
      <motion.div
        animate={
          opened
            ? { opacity: 0, scale: 1.5 }
            : {
                opacity: [0.2, 0.55, 0.2],
                scale: [0.94, 1.06, 0.94],
              }
        }
        transition={
          opened
            ? { duration: 0.6 }
            : { duration: 3, repeat: Infinity, ease: 'easeInOut' }
        }
        style={{
          position: 'absolute',
          width: 'min(100vw, 520px)',
          aspectRatio: '1',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(218,169,83,0.35), transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      {/* Original burgundy-and-gold scroll artwork */}
      <motion.div
        initial={{ opacity: 0, y: 24, scale: 0.94 }}
        animate={
          opened
            ? {
                opacity: [1, 1, 0],
                y: [0, -8, -55],
                scaleX: [1, 0.78, 1.04],
                scaleY: [1, 0.96, 1.08],
                rotateX: [0, -5, 0],
                rotateZ: [0, 0, -2],
              }
            : {
                opacity: 1,
                y: [0, -7, 0],
                scale: 1,
                rotateX: 0,
                rotateZ: 0,
              }
        }
        transition={
          opened
            ? {
                duration: 1.1,
                times: [0, 0.55, 1],
                ease: [0.22, 1, 0.36, 1],
              }
            : {
                opacity: { duration: 0.8 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  ease: 'easeInOut',
                },
                scale: { duration: 0.8 },
              }
        }
        style={{
          position: 'relative',
          width: 'min(84vw, 410px)',
          maxHeight: '65vh',
          display: 'flex',
          justifyContent: 'center',
          transformOrigin: 'center center',
          transformStyle: 'preserve-3d',
          filter:
            'drop-shadow(0 24px 30px rgba(0,0,0,0.45))',
        }}
      >
        <img
          src="/envelope.jpeg"
          alt="Burgundy and gold wedding invitation scroll with gold seal"
          draggable={false}
          style={{
            display: 'block',
            width: '100%',
            maxHeight: '65vh',
            objectFit: 'contain',
            borderRadius: '3px',
            userSelect: 'none',
          }}
        />
      </motion.div>

      {/* Instructions */}
      <motion.div
        animate={{
          opacity: opened ? 0 : 1,
          y: opened ? 12 : 0,
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'relative',
          marginTop: '24px',
          textAlign: 'center',
          color: '#f0d5a0',
          fontFamily: 'Georgia, serif',
        }}
      >
        <p
          style={{
            fontSize: '19px',
            letterSpacing: '1px',
            margin: '0 0 12px',
          }}
        >
          {opened
            ? 'Unfurling your invitation…'
            : 'A Royal Invitation Awaits'}
        </p>

        {!opened && (
          <>
            <motion.div
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{
                width: '60px',
                height: '1px',
                background: '#d5ad63',
                margin: '0 auto 13px',
              }}
            />

            <p
              style={{
                fontSize: '12px',
                letterSpacing: '3px',
                margin: 0,
              }}
            >
              TAP TO UNFURL
            </p>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}
