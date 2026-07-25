import ParallaxWord from '@/components/ui/ParallaxWord'
import FloatingField from './FloatingField'
import { STACK } from '@/lib/data'

const CATEGORIES = [
  { k: 'Frontend', v: 'Next.js · React · TypeScript · Tailwind · shadcn/ui · Framer Motion' },
  { k: 'Backend',  v: 'Node · PostgreSQL · MongoDB · REST · Prisma · auth flows' },
  { k: 'Infra',    v: 'Vercel · Cloudflare · GitHub Actions · Edge functions' },
  { k: 'Adjacent', v: 'Figma · Linear · the terminal · a notebook' },
]

export default function TechStack() {
  return (
    <section id="stack" data-section-index="02" className="section">
      <ParallaxWord text="tools." top="12%" anchor="right" speed={0.3} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="section-head">
          <div>
            <div className="section-index rv">
              <span className="rule" />
              <span>
                Index / <b>02</b> — Tools
              </span>
            </div>
            <h2 className="h-display rv section-title">
              Tools I trust
              <br />
              <span className="h-serif" style={{ fontStyle: 'italic' }}>
                by now.
              </span>
            </h2>
          </div>
          <p className="rv section-lede">
            I work in a single stack on purpose — the depth pays off. These are the libraries and
            runtimes I reach for first, and the ones I&apos;d defend in a long meeting.
          </p>
        </div>

        <FloatingField />

        {/* Below 900px the floating field becomes an unreadable pile of
            overlapping pills, so it is swapped for a plain list. */}
        <ul className="tech-list rv" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {STACK.map((t) => (
            <li key={t.name} className="chip">
              <span className="glyph" />
              {t.name}
            </li>
          ))}
        </ul>

        <div className="rv tech-categories">
          {CATEGORIES.map((c) => (
            <div key={c.k}>
              <div className="label-mono" style={{ marginBottom: 8 }}>
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
