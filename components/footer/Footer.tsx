import Magnetic from '@/components/ui/Magnetic'
import ParallaxWord from '@/components/ui/ParallaxWord'
import BackToTop from './BackToTop'

const SOCIAL_LINKS = [
  { label: 'Github',   handle: '@aydinnasibli' },
  { label: 'LinkedIn', handle: 'aydinnasibli'  },
  { label: 'Twitter',  handle: '@aydinnasibli' },
  { label: 'Read.cv',  handle: 'aydinnasibli'  },
]

export default function Footer() {
  return (
    <section
      id="contact"
      data-section-index="04"
      style={{ position: 'relative', padding: '60px 0 60px', overflow: 'hidden' }}
    >
      <ParallaxWord text="hello." top="14%" anchor="right" speed={0.32} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-index rv">
          <span className="rule" />
          <span>
            Index / <b>04</b> — Contact
          </span>
        </div>

        <h2
          className="h-display rv"
          style={{
            fontSize: 'clamp(72px, 14vw, 240px)',
            margin: '20px 0 8px',
            lineHeight: 0.88,
            letterSpacing: '-0.05em',
          }}
        >
          Have a&nbsp;<span className="h-serif" style={{ fontStyle: 'italic' }}>good</span>
        </h2>
        <h2
          className="h-display rv"
          style={{
            fontSize: 'clamp(72px, 14vw, 240px)',
            margin: 0,
            lineHeight: 0.88,
            letterSpacing: '-0.05em',
          }}
        >
          one to&nbsp;<span className="h-serif" style={{ fontStyle: 'italic' }}>build?</span>
        </h2>

        <div
          style={{
            marginTop: 80,
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr 1fr',
            gap: 40,
            alignItems: 'flex-start',
          }}
        >
          {/* Email */}
          <div className="rv">
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: 10,
              }}
            >
              Write
            </div>
            <Magnetic strength={0.18}>
              <a
                data-cursor="hover"
                href="mailto:mail@aydinnasibli.com"
                style={{
                  display: 'inline-block',
                  color: 'var(--ink)',
                  textDecoration: 'none',
                  fontSize: 'clamp(28px, 3.6vw, 56px)',
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 500,
                  letterSpacing: '-0.03em',
                  lineHeight: 1,
                  borderBottom: '1px solid var(--ink)',
                  paddingBottom: 6,
                }}
              >
                mail@aydinnasibli.com
              </a>
            </Magnetic>
          </div>

          {/* Social */}
          <div className="rv">
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: 10,
              }}
            >
              Elsewhere
            </div>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: 6 }}>
              {SOCIAL_LINKS.map(({ label, handle }) => (
                <li key={label}>
                  <a
                    data-cursor="hover"
                    href="#"
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '8px 0',
                      borderBottom: '1px solid var(--line)',
                      color: 'var(--ink)',
                      textDecoration: 'none',
                      fontSize: 15,
                    }}
                  >
                    <span>{label}</span>
                    <span
                      style={{
                        color: 'var(--muted)',
                        fontFamily: 'var(--font-mono)',
                        fontSize: 12,
                      }}
                    >
                      {handle} →
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Location */}
          <div className="rv">
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '.18em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
                marginBottom: 10,
              }}
            >
              Based
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-2)' }}>
              Istanbul
              <br />
              Türkiye
              <br />
              <span style={{ color: 'var(--muted)' }}>GMT+3 · quiet hours</span>
            </div>
            <div
              style={{
                marginTop: 16,
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                color: 'var(--muted)',
              }}
            >
              Open to new work
            </div>
          </div>
        </div>

        {/* Baseline */}
        <div
          style={{
            marginTop: 120,
            paddingTop: 22,
            borderTop: '1px solid var(--line)',
            display: 'flex',
            justifyContent: 'space-between',
            flexWrap: 'wrap',
            gap: 16,
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '.14em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          <div>© 2026 · Aydin Nasibli</div>
          <div>Set in Geist &amp; Instrument Serif</div>
          <div>Made in Istanbul · v04.2</div>
          <BackToTop />
        </div>
      </div>
    </section>
  )
}
