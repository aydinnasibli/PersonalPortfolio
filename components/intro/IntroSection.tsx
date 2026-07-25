import ParallaxWord from '@/components/ui/ParallaxWord'

export default function IntroSection() {
  return (
    <section data-section-index="00" className="section">
      <ParallaxWord text="notes." top="20%" anchor="right" speed={0.32} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="intro-grid">
          <div className="rv">
            <div className="section-index">
              <span className="rule" />
              <span>
                Index / <b>00</b> — A note
              </span>
            </div>
            <div className="label-mono" style={{ marginTop: 32, lineHeight: 1.9 }}>
              Based &nbsp;—&nbsp; Istanbul, Türkiye
              <br />
              Work &nbsp;—&nbsp; Full stack, end-to-end
              <br />
              Status &nbsp;—&nbsp; <span style={{ color: 'var(--ink)' }}>Open to new work</span>
            </div>
          </div>

          <div>
            <p className="h-serif mask-line intro-lede">
              <span>
                <em>I build software with patience</em> — quiet interfaces, considered systems, and
                the conviction that small decisions outlast loud ones.
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
              I work end-to-end — from the database schema nobody sees to the typography that lives
              on top of it. The projects I love sit where engineering rigor and editorial taste turn
              into the same conversation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
