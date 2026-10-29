import { motion } from 'framer-motion'
import { fadeUp, fadeLeft } from '../animations'

export default function HeroSlide() {
  return (
    <section
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '600px',
        overflow: 'hidden',
        isolation: 'isolate',
        background: '#fdf5e8',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        border: '2px solid #D4AF37',
        boxSizing: 'border-box',
      }}
    >
      {/* Cream background with existing three-sided hero border */}
      <img
        src="/heroborder.jpg"
        alt=""
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'fill',
          zIndex: -2,
          pointerEvents: 'none',
        }}
      />

      {/* Couple portrait */}
      <motion.div
        initial={{ opacity: 0, y: 18, scale: 0.97 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: 'easeOut' }}
        style={{
          position: 'absolute',
          top: '14%',
          width: 'min(45vw, 310px)',
          height: '49%',
          maxHeight: '514px',
          overflow: 'hidden',
          borderRadius: '54% 54% 46% 46% / 24% 24% 14% 14%',
          zIndex: 1,
          boxShadow: '0 8px 24px rgba(83, 47, 15, 0.18)',
        }}
      >
        <img
          src="/couple-main.jpeg"
          alt="Kiran Sree and Srikanth"
          style={{
            width: '100%',
            height: '100%',
            display: 'block',
            objectFit: 'cover',
            objectPosition: 'center 15%',
          }}
        />
      </motion.div>

      {/* Welcome and names panel */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        style={{
          position: 'absolute',
          left: '12px',
          right: '12px',
          bottom: '3%',
          background: 'rgba(35, 20, 25, 0.88)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(212, 175, 55, 0.7)',
          borderRadius: '16px',
          padding: '20px 12px 24px',
          textAlign: 'center',
          color: '#fdf0da',
          zIndex: 2,
        }}
      >
        <motion.p
          variants={fadeLeft}
          style={{
            fontFamily: 'serif',
            fontSize: 'clamp(10px, 2.8vw, 14px)',
            letterSpacing: '3px',
            margin: '0 0 12px',
          }}
        >
          TOGETHER WITH THEIR FAMILIES
        </motion.p>

        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'serif',
            fontSize: 'clamp(30px, 8vw, 48px)',
            fontWeight: 400,
            lineHeight: 1.12,
            margin: 0,
            color: '#fdf0da',
          }}
        >
          Kiran Sree

          <span
            style={{
              display: 'block',
              fontSize: '24px',
              margin: '7px 0',
              color: '#fdf0da',
              WebkitTextStroke: '1.44px #D4AF37',
              paintOrder: 'stroke fill',
              textShadow: '0 0 8px rgba(212, 175, 55, 0.25)',
            }}
          >
            &amp;
          </span>

          Srikanth
        </motion.h1>

        <motion.p
          variants={fadeUp}
          style={{
            fontFamily: 'serif',
            fontSize: 'clamp(12px, 3.5vw, 16px)',
            margin: '15px 0 0',
            letterSpacing: '2px',
          }}
        >
          A BEAUTIFUL BEGINNING
        </motion.p>
      </motion.div>
    </section>
  )
}