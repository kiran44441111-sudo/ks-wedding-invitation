
import { useRef } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, stagger } from '../animations'

function IntertwinedRings() {
  return (
    <div
      aria-label="Intertwined gold wedding rings with a shining diamond"
      role="img"
      style={{
        position: 'absolute',
        top: '12px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '125px',
        height: '90px',
        zIndex: 3,
        pointerEvents: 'none',
        filter: 'drop-shadow(0 3px 8px rgba(226, 189, 122, 0.4))',
      }}
    >
      <style>
        {`
          @keyframes diamondShine {
            0%, 100% {
              opacity: 0.65;
              filter: brightness(1);
            }
            50% {
              opacity: 1;
              filter: brightness(2);
            }
          }
        `}
      </style>

      <svg
        viewBox="0 0 180 115"
        width="100%"
        height="100%"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="ringGoldTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#fff4c6" />
            <stop offset="25%" stopColor="#c9942a" />
            <stop offset="48%" stopColor="#fff0a6" />
            <stop offset="75%" stopColor="#a76a13" />
            <stop offset="100%" stopColor="#f8d878" />
          </linearGradient>

          <linearGradient id="diamondGoldTop" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="45%" stopColor="#fff1b8" />
            <stop offset="100%" stopColor="#d6a43b" />
          </linearGradient>
        </defs>

        {/* Intertwined rings */}
        <ellipse
          cx="67"
          cy="60"
          rx="34"
          ry="39"
          stroke="url(#ringGoldTop)"
          strokeWidth="9"
        />
        <ellipse
          cx="67"
          cy="60"
          rx="34"
          ry="39"
          stroke="#fff3c4"
          strokeWidth="1.2"
          opacity="0.8"
        />

        <ellipse
          cx="108"
          cy="51"
          rx="34"
          ry="39"
          transform="rotate(-16 108 51)"
          stroke="url(#ringGoldTop)"
          strokeWidth="9"
        />
        <ellipse
          cx="108"
          cy="51"
          rx="34"
          ry="39"
          transform="rotate(-16 108 51)"
          stroke="#fff3c4"
          strokeWidth="1.2"
          opacity="0.8"
        />

        {/* One shining diamond */}
        <g style={{ animation: 'diamondShine 1.8s ease-in-out infinite' }}>
          <path
            d="M108 3 L116 11 L108 23 L100 11 Z"
            fill="url(#diamondGoldTop)"
            stroke="#fff8dc"
            strokeWidth="1.2"
          />
          <path
            d="M100 11 L108 13 L116 11 M108 13 L108 23"
            stroke="#c9942a"
            strokeWidth="0.8"
          />
          <path
            d="M108 0 V-3 M97 5 L94 2 M119 5 L122 2"
            stroke="#fff4c6"
            strokeWidth="1.2"
            strokeLinecap="round"
          />
        </g>
      </svg>
    </div>
  )
}

export default function EngagementVideo() {
  const videoRef = useRef(null)

  function pauseBackgroundMusic() {
    const music = document.querySelector('audio')
    if (music && !music.paused) {
      music.pause()
    }
  }

  function resumeBackgroundMusic() {
    const music = document.querySelector('audio')
    if (music) {
      music.play().catch(() => {})
    }
  }

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        padding: '115px 15px 0',
        boxSizing: 'border-box',
        overflow: 'hidden',
        color: '#fff4e5',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        isolation: 'isolate',
      }}
    >
      {/* Background photo */}
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
          zIndex: -2,
        }}
      />

      {/* Dark overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(24, 12, 20, 0.58)',
          zIndex: -1,
        }}
      />

      {/* Rings remain independent at the very top */}
      <IntertwinedRings />

      {/* Headings and video stay below the rings */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-40px' }}
        variants={stagger}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: '700px',
          margin: 'auto auto 0',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <motion.p
          variants={fadeLeft}
          style={{
            color: '#e2bd7a',
            letterSpacing: '3px',
            fontSize: '15px',
            margin: '0 0 5px',
          }}
        >
          OUR MEMORIES
        </motion.p>

        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(30px, 8vw, 36px)',
            fontWeight: 400,
            color: '#ffffff',
            margin: '0 0 8px',
            lineHeight: 1.15,
          }}
        >
          Our Engagement
        </motion.h2>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '16px',
            margin: '0 0 5px',
            lineHeight: 1.5,
          }}
        >
          Relive our beautiful moments with us.
        </motion.p>

        <motion.p
          variants={fadeUp}
          lang="te"
          style={{
            fontFamily: '"Noto Sans Telugu", sans-serif',
            fontSize: '16px',
            color: '#ffffff',
            margin: '0 0 14px',
            lineHeight: 1.6,
          }}
        >
          మా నిశ్చితార్థపు మధుర జ్ఞాపకాలు
        </motion.p>

        {/* Video at the bottom */}
        <motion.div
          variants={fadeUp}
          style={{
            width: '100%',
            margin: 0,
            padding: 0,
          }}
        >
          <video
            ref={videoRef}
            src="/engagement.mp4"
            controls
            playsInline
            preload="metadata"
            onPlay={pauseBackgroundMusic}
            onPause={resumeBackgroundMusic}
            onEnded={resumeBackgroundMusic}
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '700px',
              maxHeight: '45svh',
              margin: '0 auto',
              borderRadius: '12px 12px 0 0',
              background: '#000000',
              objectFit: 'contain',
            }}
          >
            Your browser does not support video playback.
          </video>
        </motion.div>
      </motion.div>
    </section>
  )
}
