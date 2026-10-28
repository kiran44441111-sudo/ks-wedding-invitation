
import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, stagger } from '../animations'

export default function FormalInvitation() {
  const dholVideoStyle = {
    width: 'clamp(70px, 23vw, 100px)',
    height: 'clamp(70px, 23vw, 100px)',
    objectFit: 'contain',
    flexShrink: 1,
    minWidth: 0,
    mixBlendMode: 'multiply',
  }

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        padding: '35px 12px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#fdf8f0',
      }}
    >
      {/* Existing background */}
      <img
        src="/couple-main.jpeg"
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

      {/* Readability overlay */}
      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(28, 12, 20, 0.48)',
        }}
      />

      {/* Formal invitation card */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-60px' }}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: '390px',
          boxSizing: 'border-box',
          padding: '24px 14px',
          textAlign: 'center',
          color: '#fff4e5',
          background: 'rgba(35, 20, 28, 0.78)',
          border: '1px solid rgba(226, 189, 122, 0.85)',
          borderRadius: '12px',
          fontFamily: 'Georgia, serif',
        }}
      >
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Kalasham image at the top center */}
          <motion.img
            src="/formal2.png"
            alt="Traditional Kalasham"
            variants={fadeUp}
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              display: 'block',
              width: '90px',
              height: '90px',
              objectFit: 'contain',
              margin: '0 auto 8px',
            }}
          />

          <motion.p
            variants={fadeLeft}
            style={{
              color: '#e2bd7a',
              letterSpacing: '3px',
              fontSize: '12px',
              marginTop: 0,
            }}
          >
            WEDDING INVITATION
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{ fontSize: '15px', lineHeight: 1.8 }}
          >
            With the blessings of the Almighty, we cordially invite you
            to bless the wedding of our beloved youngest daughter.
          </motion.p>

          <motion.p
            variants={fadeUp}
            lang="te"
            style={{
              fontFamily: '"Noto Sans Telugu", sans-serif',
              fontSize: '14px',
              lineHeight: 2,
            }}
          >
            భగవంతుని ఆశీస్సులతో మా ప్రియమైన కనిష్ఠ కుమార్తె వివాహానికి
            విచ్చేసి ఆశీర్వదించవలసిందిగా మనస్ఫూర్తిగా ఆహ్వానిస్తున్నాము.
          </motion.p>

          <motion.h1
            variants={fadeUp}
            style={{
              color: '#f0c4d5',
              fontSize: 'clamp(20px, 5.5vw, 30px)',
              whiteSpace: 'nowrap',
              margin: '22px 0 8px',
            }}
          >
            Chi. La. Sow. Kiran Sree
          </motion.h1>

          <motion.p
            variants={fadeUp}
            lang="te"
            style={{
              fontFamily: '"Noto Sans Telugu", sans-serif',
              fontSize: '15px',
              fontStyle: 'italic',
            }}
          >
            (చి. ల. సౌ. కిరణ్ శ్రీ)
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{ fontSize: '14px', lineHeight: 1.8 }}
          >
            (D/o. Smt. Jaya Sree &amp; Sri. B. Surya Kiran)
          </motion.p>

          <motion.p
            variants={fadeUp}
            lang="te"
            style={{
              fontFamily: '"Noto Sans Telugu", sans-serif',
              fontSize: '13px',
              fontStyle: 'italic',
              lineHeight: 2,
            }}
          >
            (శ్రీమతి జయ శ్రీ &amp; శ్రీ బి. సూర్య కిరణ్ గారి కుమార్తె)
          </motion.p>

          {/* Larger looping dhol videos around "with" */}
          <motion.div
            variants={fadeUp}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              margin: '12px auto',
              width: '100%',
            }}
          >
            {/* Left dhol */}
            <video
              src="/formal4.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="Decorative left dhol animation"
              style={dholVideoStyle}
            />

            <p
              style={{
                color: '#e2bd7a',
                fontSize: '22px',
                fontStyle: 'italic',
                margin: 0,
                flexShrink: 0,
              }}
            >
              with
            </p>

            {/* Right dhol */}
            <video
              src="/formal3.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              aria-label="Decorative right dhol animation"
              style={dholVideoStyle}
            />
          </motion.div>

          <motion.h2
            variants={fadeUp}
            style={{
              color: '#f0c4d5',
              fontSize: '32px',
              margin: '8px 0',
            }}
          >
            Chi. Srikanth
          </motion.h2>

          <motion.p
            variants={fadeUp}
            lang="te"
            style={{
              fontFamily: '"Noto Sans Telugu", sans-serif',
              fontSize: '15px',
              fontStyle: 'italic',
            }}
          >
            (చి. శ్రీకాంత్)
          </motion.p>

          <motion.p
            variants={fadeUp}
            style={{ fontSize: '14px', lineHeight: 1.8 }}
          >
            (S/o. Smt. Saritha &amp; Sri. K. Srinivas)
          </motion.p>

          <motion.p
            variants={fadeUp}
            lang="te"
            style={{
              fontFamily: '"Noto Sans Telugu", sans-serif',
              fontSize: '13px',
              fontStyle: 'italic',
              lineHeight: 2,
            }}
          >
            (శ్రీమతి సరిత &amp; శ్రీ కె. శ్రీనివాస్ గారి కుమారుడు)
          </motion.p>

          {/* Bottom divider removed */}
        </motion.div>
      </motion.div>
    </section>
  )
}
