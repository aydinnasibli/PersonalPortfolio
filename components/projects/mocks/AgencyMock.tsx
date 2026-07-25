import type { MockProps } from './primitives'

const PROJECTS = [
  { name: 'Northwind Coffee', stage: 'Design', p: 0.62, active: true },
  { name: 'Harbour Dental',   stage: 'Live',   p: 1 },
  { name: 'Studio Meridian',  stage: 'Build',  p: 0.38 },
  { name: 'Anvil Logistics',  stage: 'Live',   p: 1 },
]

const DIM = 'rgba(235,232,226,0.5)'
const HAIRLINE = 'rgba(235,232,226,0.14)'

/** XDigital — the only dark mock: a client portal over a subscription card. */
export default function AgencyMock({ accent }: MockProps) {
  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        display: 'grid',
        gridTemplateColumns: '1.55fr 1fr',
        background: '#131211',
        color: '#ebe8e2',
        overflow: 'hidden',
        minWidth: 0,
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(ellipse 60% 55% at 82% 0%, color-mix(in oklab, ${accent} 26%, transparent), transparent 72%)`,
        }}
      />

      {/* Project board */}
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
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 8,
            padding: '13px 16px 0',
            fontFamily: 'var(--font-mono)',
            fontSize: 8.5,
            letterSpacing: '.2em',
            textTransform: 'uppercase',
          }}
        >
          <span style={{ color: DIM }}>Client portal</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, color: DIM }}>
            <span
              style={{ width: 5, height: 5, borderRadius: 999, background: 'oklch(0.74 0.17 150)' }}
            />
            99.9%
          </span>
        </div>

        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            gap: 8,
            padding: '10px 16px',
          }}
        >
          {PROJECTS.map((p) => (
            <div key={p.name} style={{ minWidth: 0 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 7 }}>
                <span
                  style={{
                    fontSize: 10.5,
                    letterSpacing: '-0.01em',
                    color: p.active ? '#ebe8e2' : DIM,
                    fontWeight: p.active ? 500 : 400,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    minWidth: 0,
                  }}
                >
                  {p.name}
                </span>
                <span style={{ flex: 1, height: 1, background: HAIRLINE, minWidth: 6 }} />
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 7,
                    letterSpacing: '.14em',
                    textTransform: 'uppercase',
                    color: p.stage === 'Live' ? 'oklch(0.74 0.17 150)' : accent,
                    flexShrink: 0,
                  }}
                >
                  {p.stage}
                </span>
              </div>
              <div
                style={{
                  marginTop: 5,
                  height: 2.5,
                  borderRadius: 999,
                  background: 'rgba(235,232,226,0.12)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    width: `${p.p * 100}%`,
                    height: '100%',
                    background: p.stage === 'Live' ? 'oklch(0.74 0.17 150)' : accent,
                    opacity: p.active || p.stage === 'Live' ? 1 : 0.5,
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <div
          style={{
            padding: '0 16px 12px',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 8,
            flexShrink: 0,
            fontFamily: 'var(--font-mono)',
            fontSize: 7,
            letterSpacing: '.16em',
            textTransform: 'uppercase',
            color: DIM,
          }}
        >
          <span>4 active</span>
          <span>Messages · 2</span>
        </div>
      </div>

      {/* Subscription card */}
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
          <span style={{ width: 13, height: 1, background: '#ebe8e2', flexShrink: 0 }} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 8,
              letterSpacing: '.2em',
              textTransform: 'uppercase',
              color: DIM,
            }}
          >
            Your plan
          </span>
        </div>

        <div
          className="h-display"
          style={{
            fontSize: 34,
            lineHeight: 0.9,
            letterSpacing: '-0.045em',
            marginTop: 9,
            color: '#ebe8e2',
          }}
        >
          $25<span style={{ fontSize: 14, color: DIM }}>/mo</span>
        </div>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 7.5,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: DIM,
            marginTop: 6,
          }}
        >
          Website · hosted
        </span>

        <div style={{ height: 1, background: HAIRLINE, margin: '12px 0 0' }} />

        <div
          style={{
            flex: 1,
            minHeight: 0,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            gap: 7,
            padding: '10px 0',
          }}
        >
          {['Hosting & SSL', 'Edge deploys', 'Content edits'].map((f) => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
              <span
                style={{
                  width: 10,
                  height: 10,
                  borderRadius: 999,
                  display: 'grid',
                  placeItems: 'center',
                  background: accent,
                  color: '#131211',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 5.5,
                  flexShrink: 0,
                }}
              >
                ✓
              </span>
              <span
                style={{
                  fontSize: 9,
                  color: DIM,
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  minWidth: 0,
                }}
              >
                {f}
              </span>
            </div>
          ))}
        </div>

        <div
          style={{
            paddingTop: 9,
            flexShrink: 0,
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
          <span style={{ color: DIM }}>Next · 01 Aug</span>
          <span style={{ color: accent }}>Manage →</span>
        </div>
      </div>
    </div>
  )
}
