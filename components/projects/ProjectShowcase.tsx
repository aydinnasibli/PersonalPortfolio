import ParallaxWord from '@/components/ui/ParallaxWord'
import ProjectRow from './ProjectRow'
import { PROJECTS } from '@/lib/data'

export default function ProjectShowcase() {
  return (
    <section
      id="work"
      data-section-index="01"
      style={{ position: 'relative', padding: '60px 0 40px', overflow: 'hidden' }}
    >
      <ParallaxWord text="work." top="14%" anchor="left" speed={0.34} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            alignItems: 'end',
            gap: 32,
            marginBottom: 64,
          }}
        >
          <div>
            <div className="section-index rv">
              <span className="rule" />
              <span>
                Index / <b>01</b> — Selected work
              </span>
            </div>
            <h2
              className="h-display rv"
              style={{ fontSize: 'clamp(48px, 7vw, 112px)', margin: '20px 0 0', lineHeight: 0.92 }}
            >
              Things I&nbsp;<span className="h-serif" style={{ fontStyle: 'italic' }}>made</span>
              <br />
              with intent.
            </h2>
          </div>
          <p
            className="rv"
            style={{
              maxWidth: 440,
              fontSize: 17,
              lineHeight: 1.55,
              color: 'var(--ink-2)',
              margin: 0,
              justifySelf: 'end',
            }}
          >
            Four projects, picked not for the logos on them but for the constraints they posed.
            Each is end-to-end — design system to deploy pipeline.
          </p>
        </div>
      </div>

      {PROJECTS.map((p, i) => (
        <ProjectRow key={p.n} project={p} index={i} flipped={i % 2 === 1} />
      ))}

      {/* Archive strip */}
      <div className="container" style={{ marginTop: 20, paddingBottom: 20 }}>
        <div
          className="rv"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'baseline',
            gap: 40,
            borderTop: '1px solid var(--line)',
            paddingTop: 28,
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            <span style={{ color: 'var(--ink)' }}>Archive</span> &nbsp;—&nbsp; more in the
            workshop
          </div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            <a
              data-cursor="hover"
              href="mailto:mail@aydinnasibli.com"
              style={{
                color: 'var(--ink)',
                textDecoration: 'none',
                borderBottom: '1px solid var(--ink)',
                paddingBottom: 2,
              }}
            >
              Ask about what&apos;s next →
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
