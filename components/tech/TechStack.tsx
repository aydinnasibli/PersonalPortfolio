import ParallaxWord from '@/components/ui/ParallaxWord'
import FloatingField from './FloatingField'

const CATEGORIES = [
  { k: 'Frontend', v: 'Next.js · React · TypeScript · Tailwind · shadcn/ui · Framer Motion' },
  { k: 'Backend',  v: 'Node · PostgreSQL · MongoDB · REST · Prisma · auth flows' },
  { k: 'Infra',    v: 'Vercel · Cloudflare · GitHub Actions · Edge functions' },
  { k: 'Adjacent', v: 'Figma · Linear · the terminal · a notebook' },
]

export default function TechStack() {
  return (
    <section
      id="stack"
      data-section-index="02"
      style={{ position: 'relative', padding: '60px 0 100px', overflow: 'hidden' }}
    >
      <ParallaxWord text="tools." top="12%" anchor="right" speed={0.3} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 64,
            alignItems: 'end',
            marginBottom: 64,
          }}
        >
          <div>
            <div className="section-index rv">
              <span className="rule" />
              <span>
                Index / <b>02</b> — Tools
              </span>
            </div>
            <h2
              className="h-display rv"
              style={{ fontSize: 'clamp(48px, 7vw, 112px)', margin: '20px 0 0', lineHeight: 0.92 }}
            >
              Tools I trust
              <br />
              <span className="h-serif" style={{ fontStyle: 'italic' }}>
                by now.
              </span>
            </h2>
          </div>
          <p
            className="rv"
            style={{
              maxWidth: 480,
              fontSize: 17,
              lineHeight: 1.55,
              color: 'var(--ink-2)',
              margin: 0,
              justifySelf: 'end',
            }}
          >
            I work in a single stack on purpose — the depth pays off. These are the libraries and
            runtimes I reach for first, and the ones I&apos;d defend in a long meeting.
          </p>
        </div>

        <FloatingField />

        <div
          className="rv"
          style={{
            marginTop: 80,
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 24,
            borderTop: '1px solid var(--line)',
            paddingTop: 28,
          }}
        >
          {CATEGORIES.map((c) => (
            <div key={c.k}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 11,
                  letterSpacing: '.16em',
                  textTransform: 'uppercase',
                  color: 'var(--muted)',
                  marginBottom: 8,
                }}
              >
                {c.k}
              </div>
              <div style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.55 }}>{c.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
