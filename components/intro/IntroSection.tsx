import ParallaxWord from '@/components/ui/ParallaxWord'

export default function IntroSection() {
  return (
    <section
      data-section-index="00"
      style={{ padding: '60px 0 60px', position: 'relative', overflow: 'hidden' }}
    >
      <ParallaxWord text="notes." top="20%" anchor="right" speed={0.32} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.4fr',
            gap: 64,
            alignItems: 'start',
          }}
        >
          <div className="rv">
            <div className="section-index">
              <span className="rule" />
              <span>
                Index / <b>00</b> — A note
              </span>
            </div>
            <div
              style={{
                marginTop: 32,
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                lineHeight: 1.9,
              }}
            >
              Based &nbsp;—&nbsp; Istanbul, Türkiye
              <br />
              Work &nbsp;—&nbsp; Full stack, end-to-end
              <br />
              Status &nbsp;—&nbsp;{' '}
              <span style={{ color: 'var(--ink)' }}>Open to new work</span>
            </div>
          </div>

          <div>
            <p
              className="h-serif mask-line"
              style={{
                fontSize: 'clamp(28px, 3vw, 44px)',
                lineHeight: 1.25,
                margin: 0,
                color: 'var(--ink)',
                letterSpacing: '-0.015em',
              }}
            >
              <span>
                <em>I build software with patience</em> — quiet interfaces, considered systems,
                and the conviction that small decisions outlast loud ones.
              </span>
            </p>
            <p
              style={{
                marginTop: 24,
                fontSize: 16,
                lineHeight: 1.65,
                color: 'var(--ink-2)',
                maxWidth: 620,
              }}
            >
              I work end-to-end — from the database schema nobody sees to the typography that
              lives on top of it. The projects I love sit where engineering rigor and editorial
              taste turn into the same conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
