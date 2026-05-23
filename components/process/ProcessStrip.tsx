import ParallaxWord from '@/components/ui/ParallaxWord'

const STEPS = [
  { n: '01', t: 'Discover', d: 'A week of conversations, sketches, and a written brief we both sign.' },
  { n: '02', t: 'Shape',    d: 'Design and architecture in parallel — high fidelity from day three.' },
  { n: '03', t: 'Ship',     d: 'Two-week cadence, end-to-end. You see it on staging on Friday.' },
  { n: '04', t: 'Steward',  d: 'Hand-off is not the end — I keep paying attention.' },
]

export default function ProcessStrip() {
  return (
    <section
      data-section-index="03"
      style={{ padding: '60px 0 100px', position: 'relative', overflow: 'hidden' }}
    >
      <ParallaxWord text="rhythm." top="14%" anchor="left" speed={0.34} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-index rv">
          <span className="rule" />
          <span>
            Index / <b>03</b> — Working with me
          </span>
        </div>
        <h2
          className="h-display rv"
          style={{ fontSize: 'clamp(40px, 5vw, 80px)', margin: '20px 0 64px', lineHeight: 0.95 }}
        >
          A&nbsp;<span className="h-serif" style={{ fontStyle: 'italic' }}>quiet</span>
          &nbsp;four-step rhythm.
        </h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
          {STEPS.map((it, i) => (
            <div
              key={it.n}
              className="rv"
              style={{
                padding: '32px 28px 0 0',
                borderRight: i === STEPS.length - 1 ? 'none' : '1px solid var(--line)',
                paddingLeft: i === 0 ? 0 : 28,
                borderTop: '1px solid var(--line)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '.18em',
                  color: 'var(--muted)',
                }}
              >
                —{it.n}
              </div>
              <div
                className="h-serif"
                style={{ fontSize: 32, margin: '10px 0 10px', letterSpacing: '-0.01em' }}
              >
                {it.t}
              </div>
              <div style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)' }}>{it.d}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
