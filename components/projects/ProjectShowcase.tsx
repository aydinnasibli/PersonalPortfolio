import ParallaxWord from '@/components/ui/ParallaxWord'
import ProjectRow from './ProjectRow'
import { EMAIL, PROJECTS } from '@/lib/data'

export default function ProjectShowcase() {
  return (
    <section id="work" data-section-index="01" className="section section-work">
      <ParallaxWord text="work." top="14%" anchor="left" speed={0.34} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-head">
          <div>
            <div className="section-index rv">
              <span className="rule" />
              <span>
                Index / <b>01</b> — Selected work
              </span>
            </div>
            <h2 className="h-display rv section-title">
              Things I&nbsp;<span className="h-serif" style={{ fontStyle: 'italic' }}>made</span>
              <br />
              with intent.
            </h2>
          </div>
          <p className="rv section-lede">
            Eight projects — education platforms, an AI charting tool, a philosophy atlas and a
            photographer&apos;s folio. Picked not for the logos on them but for the constraints they
            posed. Each is end-to-end: design system to deploy pipeline.
          </p>
        </div>
      </div>

      {PROJECTS.map((p, i) => (
        <ProjectRow key={p.n} project={p} flipped={i % 2 === 1} />
      ))}

      {/* Archive strip */}
      <div className="container" style={{ marginTop: 20, paddingBottom: 20 }}>
        <div className="rv archive-strip">
          <div className="label-mono">
            <span style={{ color: 'var(--ink)' }}>Archive</span> &nbsp;—&nbsp; more in the workshop
          </div>
          <a className="link-undr label-mono" data-cursor="hover" href={`mailto:${EMAIL}`}>
            Ask about what&apos;s next →
          </a>
        </div>
      </div>
    </section>
  )
}
