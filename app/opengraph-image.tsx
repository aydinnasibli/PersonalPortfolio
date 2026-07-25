import { ImageResponse } from 'next/og'

export const alt = 'Aydin Nasibli — Full Stack Web Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

/**
 * The card was previously declared as `summary_large_image` with no image at
 * all, so every share rendered blank. Generated rather than a static asset so
 * it stays in step with the site's palette.
 */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          background: '#f4f1ec',
          padding: '72px 80px',
          fontFamily: 'sans-serif',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 16,
            fontSize: 22,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#6e6a62',
          }}
        >
          <div style={{ width: 44, height: 2, background: '#14130f' }} />
          <div style={{ display: 'flex' }}>Portfolio Vol. 04 — 2026</div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 132,
              fontWeight: 600,
              letterSpacing: '-0.05em',
              lineHeight: 0.9,
              color: '#14130f',
            }}
          >
            Aydin Nasibli
            <span style={{ color: '#4f46e5' }}>.</span>
          </div>
          <div
            style={{
              display: 'flex',
              marginTop: 28,
              fontSize: 38,
              lineHeight: 1.3,
              color: '#2b2925',
              maxWidth: 900,
            }}
          >
            Full-stack web developer building unhurried, considered software — from schema to
            cursor.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '2px solid rgba(20,19,15,0.14)',
            paddingTop: 28,
            fontSize: 22,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#6e6a62',
          }}
        >
          <div style={{ display: 'flex' }}>Frontend · Backend · Interface design</div>
          <div style={{ display: 'flex', color: '#14130f' }}>aydinnasibli.com</div>
        </div>
      </div>
    ),
    { ...size }
  )
}
