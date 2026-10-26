
import { useState, useEffect } from 'react'

function useCountdown(targetDate) {
  const [time, setTime] = useState({})

  useEffect(() => {
    const updateCountdown = () => {
      const diff = new Date(targetDate).getTime() - Date.now()
      const remaining = Math.max(0, diff)

      setTime({
        days: Math.floor(remaining / 86400000),
        hours: Math.floor((remaining % 86400000) / 3600000),
        minutes: Math.floor((remaining % 3600000) / 60000),
        seconds: Math.floor((remaining % 60000) / 1000),
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [targetDate])

  return time
}

export default function CountdownSlide() {
  const { days, hours, minutes, seconds } =
    useCountdown('2026-12-31T00:00:00')

  return (
    <section
      style={{
        minHeight: '100vh',
        padding: '60px 20px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: '#fdf8f0',
        color: '#5a3200',
      }}
    >
      <p style={{ letterSpacing: '4px', color: '#c9942a' }}>
        OUR SPECIAL DAY
      </p>

      <h2
        style={{
          fontFamily: 'serif',
          fontWeight: 400,
          fontSize: '36px',
        }}
      >
        The Countdown
      </h2>

      <p style={{ fontFamily: 'serif', fontSize: '18px' }}>
        A beautiful new chapter begins
      </p>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          marginTop: '24px',
        }}
      >
        {[
          ['Days', days],
          ['Hours', hours],
          ['Minutes', minutes],
          ['Seconds', seconds],
        ].map(([label, value]) => (
          <div
            key={label}
            style={{
              minWidth: '65px',
              padding: '16px 10px',
              border: '1px solid #c9942a',
              borderRadius: '10px',
            }}
          >
            <div style={{ fontSize: '30px' }}>
              {String(value ?? 0).padStart(2, '0')}
            </div>
            <div style={{ fontSize: '12px', letterSpacing: '1px' }}>
              {label}
            </div>
          </div>
        ))}
      </div>

      <p style={{ marginTop: '28px', fontSize: '13px' }}>
        Our wedding date will be revealed soon
      </p>
    </section>
  )
}
