
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, fadeLeft, stagger } from '../animations'

const weddingDate = new Date('2026-11-21T10:04:00+05:30').getTime()

function getTimeLeft() {
  const difference = Math.max(0, weddingDate - Date.now())

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  }
}

export default function FinalSlide({ dateRevealed }) {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const units = [
    ['Days', timeLeft.days],
    ['Hours', timeLeft.hours],
    ['Minutes', timeLeft.minutes],
    ['Seconds', timeLeft.seconds],
  ]

  return (
    <section
      style={{
        position: 'relative',
        isolation: 'isolate',
        minHeight: '100vh',
        padding: '60px 22px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        color: '#ffffff',
        overflow: 'hidden',
      }}
    >
      <img
        src="/couple-2.jpeg"
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

      <div
        aria-hidden="true"
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(20, 8, 16, 0.76)',
          zIndex: -1,
        }}
      />

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <motion.h1
          variants={fadeUp}
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(27px, 7vw, 39px)',
            fontWeight: 700,
            lineHeight: 1.35,
            letterSpacing: '1px',
            margin: '0 0 26px',
            color: '#f4d99c',
            textTransform: 'uppercase',
          }}
        >
          BHIMANATHI FAMILY INVITES YOU
        </motion.h1>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '17px',
            lineHeight: 1.9,
            maxWidth: '470px',
            margin: '0 0 20px',
          }}
        >
          With great happiness, we request the honor of your presence as we
          celebrate the sacred wedding ceremony of our youngest daughter{' '}
          <strong>KIRAN SREE</strong> with <strong>SRIKANTH</strong>.
        </motion.p>

        <motion.p
          variants={fadeUp}
          style={{
            fontSize: '16px',
            lineHeight: 1.9,
            maxWidth: '450px',
            margin: '0 0 10px',
          }}
        >
          Your presence, love and blessings will make our special day
          even more meaningful.
        </motion.p>

        <motion.p
          variants={fadeUp}
          lang="te"
          style={{
            fontFamily: '"Noto Sans Telugu", sans-serif',
            fontSize: '15px',
            lineHeight: 1.9,
            maxWidth: '450px',
            margin: '0 0 20px',
          }}
        >
          మా కనిష్ఠ కుమార్తె కిరణ్ శ్రీ మరియు శ్రీకాంత్‌ల పవిత్ర వివాహ
          వేడుకకు మీ అమూల్యమైన సమక్షాన్ని, ప్రేమను, ఆశీర్వాదాలను
          అందించవలసిందిగా సంతోషంగా ఆహ్వానిస్తున్నాము.
          <br />
          మీ రాక, ప్రేమ, ఆశీర్వాదాలు మా ప్రత్యేకమైన రోజును మరింత
          అర్థవంతంగా మారుస్తాయి.
        </motion.p>

        <motion.div
          variants={fadeUp}
          style={{
            width: '100%',
            maxWidth: '460px',
            marginTop: '20px',
            padding: '24px 14px',
            boxSizing: 'border-box',
            border: '1px solid #e8c77f',
            borderRadius: '18px',
            background: 'rgba(35, 20, 28, 0.82)',
            backdropFilter: 'blur(8px)',
          }}
        >
          <motion.p
            variants={fadeLeft}
            style={{
              fontSize: '12px',
              letterSpacing: '3px',
              color: '#f4d99c',
              marginTop: 0,
            }}
          >
            COUNTING DOWN TO OUR WEDDING
          </motion.p>

          {dateRevealed && (
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              style={{
                fontSize: '16px',
                lineHeight: 1.8,
                margin: '12px 0 22px',
                color: '#fff4e5',
              }}
            >
              21 November 2026 · 10:04 AM IST
            </motion.p>
          )}

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
              gap: '8px',
            }}
          >
            {units.map(([label, value], index) => (
              <motion.div
                key={label}
                variants={fadeUp}
                transition={{ delay: index * 0.1 }}
                style={{
                  padding: '14px 2px',
                  border: '1px solid #e4d1b0',
                  borderRadius: '10px',
                  background: '#fffaf2',
                  color: '#4a2208',
                }}
              >
                <div
                  style={{
                    fontSize: 'clamp(22px, 5vw, 32px)',
                    fontFamily: 'Georgia, serif',
                    color: '#7b263a',
                  }}
                >
                  {String(value).padStart(2, '0')}
                </div>

                <div style={{ fontSize: '11px', marginTop: '6px' }}>
                  {label}
                </div>
              </motion.div>
            ))}
          </div>

          {timeLeft.days === 0 &&
            timeLeft.hours === 0 &&
            timeLeft.minutes === 0 &&
            timeLeft.seconds === 0 && (
              <p>
                Our special day is here. We look forward to celebrating with you!
              </p>
            )}
        </motion.div>

        <motion.div
          variants={fadeUp}
          style={{
            marginTop: '34px',
            lineHeight: 1.8,
            color: '#f4d99c',
          }}
        >
          <p
            style={{
              fontSize: '15px',
              fontWeight: 700,
              letterSpacing: '3px',
              marginBottom: '8px',
            }}
          >
            WITH LOVE,
          </p>

          <motion.p
            variants={fadeLeft}
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(17px, 4.5vw, 23px)',
              fontWeight: 700,
              margin: 0,
            }}
          >
            B. SURYA KIRAN &amp; B. S. JAYA SREE
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  )
}
