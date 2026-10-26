
import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, stagger } from '../animations'

export default function EngagementVideo() {
  const videoRef = useRef(null)
  const [videoVolume, setVideoVolume] = useState(0.7)
  const [videoMuted, setVideoMuted] = useState(false)

  function pauseBackgroundMusic() {
    const music = document.querySelector('audio')
    if (music && !music.paused) music.pause()
  }

  function resumeBackgroundMusic() {
    const music = document.querySelector('audio')
    if (music) {
      music.play().catch(() => {})
    }
  }

  function changeVolume(value) {
    const volume = Number(value)
    setVideoVolume(volume)

    if (videoRef.current) {
      videoRef.current.volume = volume
      videoRef.current.muted = false
      setVideoMuted(false)
    }
  }

  return (
    <section
      style={{
        position: 'relative',
        padding: '55px 18px',
        minHeight: '90vh',
        boxSizing: 'border-box',
        overflow: 'hidden',
        color: '#fff4e5',
        textAlign: 'center',
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
          background: 'rgba(24, 12, 20, 0.68)',
        }}
      />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        variants={stagger}
        style={{ position: 'relative', zIndex: 1 }}
      >
        <motion.p
          variants={fadeLeft}
          style={{ color: '#e2bd7a', letterSpacing: '3px' }}
        >
          OUR MEMORIES
        </motion.p>

        <motion.h2
          variants={fadeUp}
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '36px',
            fontWeight: 400,
            color: '#ffffff',
          }}
        >
          Our Engagement
        </motion.h2>

        <motion.p variants={fadeUp}>
          Relive our beautiful moments with us.
        </motion.p>

        <motion.p
          variants={fadeUp}
          lang="te"
          style={{
            fontFamily: '"Noto Sans Telugu", sans-serif',
            fontSize: '16px',
            color: '#ffffff',
          }}
        >
          మా నిశ్చితార్థపు మధుర జ్ఞాపకాలు
        </motion.p>

        <motion.div variants={fadeUp}>
          <video
            ref={videoRef}
            src="/engagement.mp4"
            controls
            playsInline
            preload="none"
            muted={videoMuted}
            onPlay={pauseBackgroundMusic}
            onPause={resumeBackgroundMusic}
            onEnded={resumeBackgroundMusic}
            style={{
              display: 'block',
              width: '100%',
              maxWidth: '700px',
              margin: '24px auto',
              borderRadius: '12px',
              background: '#ffffff',
            }}
          >
            Your browser does not support video playback.
          </video>
        </motion.div>

        <motion.div
          variants={fadeUp}
          style={{
            maxWidth: '400px',
            margin: '0 auto',
            textAlign: 'left',
            padding: '16px',
            boxSizing: 'border-box',
            background: 'rgba(35, 20, 28, 0.78)',
            border: '1px solid rgba(226, 189, 122, 0.7)',
            borderRadius: '12px',
          }}
        >
          <button
            type="button"
            onClick={() => {
              const next = !videoMuted
              setVideoMuted(next)

              if (videoRef.current) {
                videoRef.current.muted = next
              }
            }}
          >
            {videoMuted ? 'Unmute video sound' : 'Mute video sound'}
          </button>

          <label
            htmlFor="video-volume"
            style={{ display: 'block', marginTop: '14px' }}
          >
            Video volume: {Math.round(videoVolume * 100)}%
          </label>

          <input
            id="video-volume"
            type="range"
            min="0"
            max="1"
            step="0.05"
            value={videoVolume}
            onChange={(event) => changeVolume(event.target.value)}
            style={{ width: '100%' }}
          />

          <p style={{ fontSize: '13px', lineHeight: 1.7 }}>
            Background music pauses while the video plays and resumes
            when you pause or finish the video.
          </p>
        </motion.div>
      </motion.div>
    </section>
  )
}
