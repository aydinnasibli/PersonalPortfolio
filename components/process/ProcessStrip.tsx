import ParallaxWord from '@/components/ui/ParallaxWord'

const STEPS = [
  { n: '01', t: 'Discover', d: 'A week of conversations, sketches, and a written brief we both sign.' },
  { n: '02', t: 'Shape',    d: 'Design and architecture in parallel — high fidelity from day three.' },
  { n: '03', t: 'Ship',     d: 'Two-week cadence, end-to-end. You see it on staging on Friday.' },
  { n: '04', t: 'Steward',  d: 'Hand-off is not the end — I keep paying attention.' },
]

export default function ProcessStrip() {
  return (
    <section data-section-index="03" className="section">
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
          style={{ fontSize: 'clamp(34px, 5vw, 80px)', margin: '20px 0 56px', lineHeight: 0.95 }}
        >
          A&nbsp;<span className="h-serif" style={{ fontStyle: 'italic' }}>quiet</span>
          &nbsp;four-step rhythm.
        </h2>

        <ol className="process-grid" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {STEPS.map((it) => (
            <li key={it.n} className="rv process-step">
              <div className="label-mono" style={{ letterSpacing: '.18em' }}>
                —{it.n}
              </div>
              <h3 className="h-serif process-title">{it.t}</h3>
              <p style={{ fontSize: 14, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 }}>
                {it.d}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
