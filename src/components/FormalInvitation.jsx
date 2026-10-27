
import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, stagger } from '../animations'

export default function FormalInvitation() {
  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100svh',
        padding: '55px 16px',
        boxSizing: 'border-box',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: '#fdf8f0',
      }}
    >
      {/* Background: couple-main.jpeg */}
      <img
        src="/couple-main.jpeg"
        alt="Kiran Sree and Srikanth"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
      />

      {/* Dark overlay for readability */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(28, 12, 20, 0.48)',
        }}
      />

      {/* Animated formal invitation card */}
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
          padding: '30px 18px',
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
          <motion.p
            variants={fadeLeft}
            style={{
              color: '#e2bd7a',
              letterSpacing: '3px',
              fontSize: '12px',
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
              fontSize: 'clamp(27px, 7vw, 38px)',
              margin: '22px 0 8px',
            }}
          >
            Chi. La. Sow. Kiran Sree
          </motion.h1>

{/* Bride's qualifications */}
<motion.p
  variants={fadeUp}
  style={{ 
    color: '#e2bd7a',
    fontSize: '14px', 
    lineSpacing: '0.5px',
    margin: '0 0 10px',
    }}
>
  B.Tech | M.Sc. | LLB
</motion.p>

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

          <motion.p
            variants={fadeUp}
            style={{
              color: '#e2bd7a',
              fontSize: '22px',
              fontStyle: 'italic',
              margin: '16px 0',
            }}
          >
            with
          </motion.p>

          
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

{/* Groom's qualifications */}
<motion.p
  variants={fadeUp}
  style={{ 
    color: '#e2bd7a',
    fontSize: '14px', 
    lineSpacing: '0.5px',
    margin: '0 0 10px',
    }}
>
  B.Com | LLB
</motion.p>

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

          <motion.div
            variants={fadeUp}
            style={{
              borderTop: '1px solid rgba(226, 189, 122, 0.65)',
              marginTop: '22px',
              paddingTop: '16px',
            }}
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
