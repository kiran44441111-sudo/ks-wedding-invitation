
export default function EventSlide({
  label = 'OUR WEDDING',
  heading = 'The Wedding',
  headingColor = '#5a3200',
  description = 'Join us as we celebrate our special day.',
  date = 'Date to be announced',
  time = 'Time to be announced',
  venue = 'Venue to be announced',
  dressCode = 'Traditional attire',
  mapsUrl = 'https://maps.google.com/',
}) {
  return (
    <section
      style={{
        minHeight: '85vh',
        padding: '60px 24px',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        background: '#fdf8f0',
        color: '#ffffff',
      }}
    >
      <p
        style={{
          color: '#c9942a',
          letterSpacing: '3px',
          fontSize: '12px',
        }}
      >
        {label}
      </p>

      <h2
        style={{
          fontFamily: 'serif',
          fontWeight: 400,
          fontSize: '42px',
          color: headingColor,
          margin: '12px 0',
        }}
      >
        {heading}
      </h2>

      <div
        style={{
          width: '60px',
          height: '1px',
          background: '#c9942a',
          margin: '12px 0 24px',
        }}
      />

      <p style={{ lineHeight: 1.8, maxWidth: '320px' }}>
        {description}
      </p>

      <p style={{ marginTop: '24px' }}>
        <strong>Date</strong>
        <br />
        {date}
      </p>

      <p>
        <strong>Time</strong>
        <br />
        {time}
      </p>

      <p>
        <strong>Venue</strong>
        <br />
        {venue}
      </p>

      <p>
        <strong>Dress Code</strong>
        <br />
        {dressCode}
      </p>

      <a
        href={mapsUrl}
        target="_blank"
        rel="noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '20px',
          padding: '12px 24px',
          border: '1px solid #c9942a',
          borderRadius: '4px',
          color: '#5a3200',
          textDecoration: 'none',
        }}
      >
        View Location on Maps
      </a>
    </section>
  )
}
