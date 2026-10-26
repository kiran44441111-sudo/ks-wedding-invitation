
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
        background: '#fdf8f0',
      }}
    >
      {/* Background photo */}
      <img
        src="/couple-main.jpeg"
        alt="Bride and groom"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 10%',
        }}
      />

      {/* Bride and groom names */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        style={{
          position: 'absolute',
          bottom: '30px',
          left: '12px',
          right: '12px',
          background: 'rgba(15,8,2,0.65)',
          backdropFilter: 'blur(12px)',
          borderRadius: '16px',
          padding: '24px 16px 30px',
          textAlign: 'center',
          color: '#fdf0da',
        }}
      >
        <motion.p
          variants={fadeLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontFamily: 'serif',
            fontSize: '14px',
            letterSpacing: '4px',
            margin: '0 0 12px',
          }}
        >
          TOGETHER WITH THEIR FAMILIES
        </motion.p>

        <motion.h1
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontFamily: 'serif',
            fontSize: 'clamp(32px, 8vw, 56px)',
            fontWeight: '400',
            margin: '0',
          }}
        >
          Kiran Sree
          <span
            style={{
              display: 'block',
              fontSize: '24px',
              margin: '8px 0',
            }}
          >
            &amp;
          </span>
          Srikanth
        </motion.h1>

        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            fontFamily: 'serif',
            fontSize: '16px',
            margin: '16px 0 0',
            letterSpacing: '2px',
          }}
        >
          A BEAUTIFUL BEGINNING
        </motion.p>
      </motion.div>
    </section>
  )
}
