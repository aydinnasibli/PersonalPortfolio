import Magnetic from '@/components/ui/Magnetic'
import ParallaxWord from '@/components/ui/ParallaxWord'
import BackToTop from './BackToTop'
import { EMAIL, SOCIAL_LINKS } from '@/lib/data'

export default function Footer() {
  return (
    <footer id="contact" data-section-index="04" className="section">
      <ParallaxWord text="hello." top="14%" anchor="right" speed={0.32} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-index rv">
          <span className="rule" />
          <span>
            Index / <b>04</b> — Contact
          </span>
        </div>

        <h2 className="h-display rv contact-title" style={{ marginBottom: 8 }}>
          Have a&nbsp;<span className="h-serif" style={{ fontStyle: 'italic' }}>good</span>
          <br />
          one to&nbsp;<span className="h-serif" style={{ fontStyle: 'italic' }}>build?</span>
        </h2>

        <div className="contact-grid">
          <div className="rv">
            <h3 className="label-mono" style={{ margin: '0 0 10px', fontWeight: 400 }}>
              Write
            </h3>
            <Magnetic strength={0.18}>
              <a className="contact-email" data-cursor="hover" href={`mailto:${EMAIL}`}>
                {EMAIL}
              </a>
            </Magnetic>
          </div>

          <div className="rv">
            <h3 className="label-mono" style={{ margin: '0 0 10px', fontWeight: 400 }}>
              Elsewhere
            </h3>
            <ul className="social-list">
              {SOCIAL_LINKS.map(({ label, handle, href }) => {
                const external = href.startsWith('http')
                return (
                  <li key={label}>
                    <a
                      data-cursor="hover"
                      href={href}
                      {...(external
                        ? { target: '_blank', rel: 'noopener noreferrer me' }
                        : {})}
                    >
                      <span>{label}</span>
                      <span className="social-handle">
                        {handle} <span aria-hidden="true">→</span>
                        {external && <span className="sr-only"> (opens in a new tab)</span>}
                      </span>
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>

          <div className="rv">
            <h3 className="label-mono" style={{ margin: '0 0 10px', fontWeight: 400 }}>
              Based
            </h3>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-2)', margin: 0 }}>
              Istanbul
              <br />
              Türkiye
              <br />
              <span style={{ color: 'var(--muted)' }}>GMT+3 · quiet hours</span>
            </p>
            <p className="label-mono" style={{ marginTop: 16, marginBottom: 0 }}>
              Open to new work
            </p>
          </div>
        </div>

        <div className="colophon">
          <div>© 2026 · Aydin Nasibli</div>
          <div>Set in Geist &amp; Instrument Serif</div>
          <div>Made in Istanbul · v04.2</div>
          <BackToTop />
        </div>
      </div>
    </footer>
  )
}
