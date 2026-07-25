import type { MockProps } from './primitives'

const ROOMS = [
  { n: '01', name: 'Photography', count: '48', active: true },
  { n: '02', name: 'Film', count: '11' },
  { n: '03', name: 'Design', count: '23' },
]

/** Duotone washes standing in for photographs. */
const THUMBS = [
  'linear-gradient(200deg, oklch(0.46 0.06 55) 0%, #0d0c0b 90%)',
  'linear-gradient(160deg, oklch(0.34 0.04 250) 0%, #0d0c0b 90%)',
  'linear-gradient(220deg, oklch(0.40 0.05 20) 0%, #0d0c0b 90%)',
]

const DIM = 'rgba(242,239,233,0.5)'
const HAIRLINE = 'rgba(242,239,233,0.14)'

/** Asiman Abdullazade — the folio: one image, almost no interface. */
export default function GalleryMock({ accent }: MockProps) {
  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1.55fr 1fr',
        background: '#0d0c0b',
        color: '#f2efe9',
        overflow: 'hidden',
        minWidth: 0,
      }}
    >
      {/* Featured plate + contact strip */}
      <div
        style={{
          position: 'relative',
          borderRight: `1px solid ${HAIRLINE}`,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          overflow: 'hidden',
        }}
      >
        <div style={{ position: 'relative', flex: 1, minHeight: 0, overflow: 'hidden' }}>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background: `linear-gradient(195deg, oklch(0.52 0.07 50) 0%, oklch(0.28 0.03 40) 55%, #0d0c0b 100%)`,
            }}
          />
          {/* Scan lines + vignette so the plate reads as a photograph */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'repeating-linear-gradient(0deg, rgba(0,0,0,0.16) 0 1px, transparent 1px 3px)',
              mixBlendMode: 'overlay',
            }}
          />
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'radial-gradient(ellipse at 45% 35%, transparent 18%, rgba(0,0,0,0.62) 100%)',
            }}
          />
          {/* Frame marks */}
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 10,
              border: `1px solid ${HAIRLINE}`,
            }}
          />

          <div style={{ position: 'absolute', left: 18, bottom: 14, right: 18, minWidth: 0 }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 6.5,
                letterSpacing: '.24em',
                textTransform: 'uppercase',
                color: DIM,
              }}
            >
              Plate 07
            </span>
            <div
              className="h-serif"
              style={{
                fontSize: 19,
                lineHeight: 1.02,
                marginTop: 4,
                letterSpacing: '-0.02em',
                color: '#f2efe9',
              }}
            >
              Caspian, late light<span style={{ color: accent }}>.</span>
            </div>
          </div>
        </div>

        {/* Contact sheet */}
        <div
          style={{
            display: 'flex',
            gap: 4,
            padding: '9px 14px 12px',
            flexShrink: 0,
          }}
        >
          {THUMBS.map((t, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: 26,
                background: t,
                border: `1px solid ${i === 0 ? accent : HAIRLINE}`,
                borderRadius: 1,
              }}
            />
          ))}
          <div
            style={{
              display: 'grid',
              placeItems: 'center',
              width: 26,
              height: 26,
              border: `1px solid ${HAIRLINE}`,
              borderRadius: 1,
              fontFamily: 'var(--font-mono)',
              fontSize: 7,
              color: DIM,
              flexShrink: 0,
            }}
          >
            +45
          </div>
        </div>
      </div>

      {/* Index panel */}
      <div
        style={{
          position: 'relative',
          padding: '15px 13px 12px',
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          overflow: 'hidden',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{ width: 13, height: 1, background: '#f2efe9', flexShrink: 0 }} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 8,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: DIM,
            }}
          >
            Rooms
          </span>
        </div>

        <div style={{ display: 'grid', gap: 9, marginTop: 12 }}>
          {ROOMS.map((r) => (
            <div key={r.n} style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 6 }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 6.5,
                    letterSpacing: '.2em',
                    color: r.active ? accent : DIM,
                    flexShrink: 0,
                  }}
                >
                  {r.n}
                </span>
                <span
                  className="h-serif"
                  style={{
                    fontSize: 13,
                    lineHeight: 1,
                    color: r.active ? '#f2efe9' : DIM,
                    letterSpacing: '-0.01em',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minWidth: 0,
                  }}
                >
                  {r.name}
                </span>
                <span
                  style={{
                    marginLeft: 'auto',
                    fontFamily: 'var(--font-mono)',
                    fontSize: 7,
                    color: DIM,
                    flexShrink: 0,
                  }}
                >
                  {r.count}
                </span>
              </div>
              {r.active && (
                <div
                  style={{ height: 1, background: accent, marginTop: 5, width: '100%' }}
                />
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            marginTop: 'auto',
            paddingTop: 9,
            borderTop: `1px solid ${HAIRLINE}`,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 8,
            fontFamily: 'var(--font-mono)',
            fontSize: 7.5,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: DIM }}>Baku</span>
          <span style={{ color: '#f2efe9' }}>Enter →</span>
        </div>
      </div>
    </div>
  )
}
