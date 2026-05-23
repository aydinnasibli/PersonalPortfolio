import type { Project } from '@/types'

function ManuscriptMock({ accent }: { accent: string }) {
  const nodes = [
    { id: 'plato',     name: 'Plato',      x: 18, y: 22 },
    { id: 'augustine', name: 'Augustine',  x: 50, y: 14 },
    { id: 'kant',      name: 'Kant',       x: 84, y: 22 },
    { id: 'spinoza',   name: 'Spinoza',    x: 10, y: 50 },
    { id: 'aristotle', name: 'Aristotle',  x: 48, y: 50, featured: true },
    { id: 'hegel',     name: 'Hegel',      x: 86, y: 56 },
    { id: 'hume',      name: 'Hume',       x: 20, y: 82 },
    { id: 'nietzsche', name: 'Nietzsche',  x: 66, y: 86 },
  ]
  const edges: [string, string][] = [
    ['plato', 'aristotle'], ['aristotle', 'augustine'], ['aristotle', 'kant'],
    ['aristotle', 'hegel'], ['plato', 'spinoza'], ['spinoza', 'hume'],
    ['hume', 'kant'], ['kant', 'hegel'], ['hegel', 'nietzsche'],
  ]
  const byId = Object.fromEntries(nodes.map((n) => [n.id, n]))

  return (
    <div
      style={{
        position: 'relative',
        height: '100%',
        background: '#FCFBF9',
        color: 'var(--ink)',
        display: 'grid',
        gridTemplateColumns: '1.55fr 1fr',
        overflow: 'hidden',
      }}
    >
      {/* LEFT — constellation */}
      <div style={{ position: 'relative', borderRight: '1px solid var(--line)', overflow: 'hidden' }}>
        <div
          aria-hidden
          style={{
            position: 'absolute',
            inset: 0,
            background: 'repeating-linear-gradient(180deg, transparent 0 26px, rgba(20,19,15,0.045) 26px 27px)',
            maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            left: 18,
            top: 14,
            fontFamily: 'var(--font-mono)',
            fontSize: 9,
            letterSpacing: '.22em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          Folio xii · the network
        </div>
        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        >
          {edges.map(([a, b], i) => {
            const A = byId[a]
            const B = byId[b]
            const touchesHi = A.featured || B.featured
            const midX = (A.x + B.x) / 2 + (B.y - A.y) * 0.1
            const midY = (A.y + B.y) / 2 - (B.x - A.x) * 0.1
            return (
              <path
                key={i}
                d={`M ${A.x} ${A.y} Q ${midX} ${midY} ${B.x} ${B.y}`}
                stroke={touchesHi ? accent : 'rgba(20,19,15,0.22)'}
                strokeOpacity={touchesHi ? 0.55 : 1}
                strokeWidth={touchesHi ? 0.22 : 0.15}
                fill="none"
              />
            )
          })}
        </svg>
        {nodes.map((n) => (
          <div
            key={n.id}
            style={{
              position: 'absolute',
              left: `${n.x}%`,
              top: `${n.y}%`,
              transform: 'translate(-50%,-50%)',
              zIndex: n.featured ? 3 : 2,
              display: 'inline-flex',
              alignItems: 'baseline',
              gap: 4,
              background: '#FCFBF9',
              padding: n.featured ? '2px 8px' : '2px 6px',
              borderRadius: 2,
              whiteSpace: 'nowrap',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-serif)',
                fontStyle: 'italic',
                fontSize: n.featured ? 22 : 12,
                lineHeight: 1,
                letterSpacing: '-0.015em',
                color: n.featured ? 'var(--ink)' : 'var(--ink-2)',
                fontWeight: 400,
              }}
            >
              {n.name}
            </span>
            {n.featured && (
              <span style={{ color: accent, fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 22, lineHeight: 1 }}>.</span>
            )}
          </div>
        ))}
        <div
          style={{
            position: 'absolute',
            left: 18,
            right: 18,
            bottom: 12,
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'var(--font-mono)',
            fontSize: 8.5,
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          <span>47 thinkers · 6c BC – 21c</span>
          <span><b style={{ color: 'var(--ink)', fontWeight: 500 }}>/</b> search</span>
        </div>
      </div>

      {/* RIGHT — reading panel */}
      <div
        style={{
          position: 'relative',
          padding: '18px 16px 14px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(180deg, #FCFBF9 0%, #f7f3ec 100%)',
          overflow: 'hidden',
          minWidth: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 8.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          <span style={{ width: 14, height: 1, background: 'var(--ink)' }} />
          <span>Currently reading</span>
        </div>
        <div className="h-serif" style={{ marginTop: 10, fontSize: 26, lineHeight: 0.92, letterSpacing: '-0.03em', color: 'var(--ink)' }}>
          Aristotle<span style={{ color: accent }}>.</span>
        </div>
        <div style={{ marginTop: 5, fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>
          384 – 322 BC · Stagira
        </div>
        <div style={{ height: 1, background: 'var(--line)', margin: '14px 0 12px' }} />
        <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 11.5, lineHeight: 1.45, color: 'var(--ink-2)', letterSpacing: '-0.005em' }}>
          "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
        </div>
        <div style={{ marginTop: 'auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: 7.5, letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 5 }}>Lineage</div>
          <div style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: 12.5, lineHeight: 1.35, color: 'var(--ink-2)', letterSpacing: '-0.01em' }}>
            Plato · <span style={{ color: 'var(--ink)', borderBottom: `1px solid ${accent}`, paddingBottom: 1 }}>Aristotle</span> · Kant
          </div>
        </div>
        <div style={{ marginTop: 12, paddingTop: 10, borderTop: '1px solid var(--line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '.18em', textTransform: 'uppercase' }}>
          <span style={{ color: 'var(--muted)' }}>Entry — 06</span>
          <span style={{ color: 'var(--ink)' }}>Open →</span>
        </div>
      </div>
    </div>
  )
}

function AtelierMock({ accent }: { accent: string }) {
  return (
    <div style={{ position: 'relative', height: '100%', padding: 20, overflow: 'hidden', background: 'var(--paper)' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 8 }}>Editorial layout</div>
      <h4 className="h-serif" style={{ fontSize: 44, lineHeight: 1, margin: '0 0 16px', letterSpacing: '-0.02em', color: 'var(--ink)' }}>
        Project<br /><span style={{ color: accent }}>title</span>.
      </h4>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 14 }}>
        <div style={{ aspectRatio: '3/4', background: `linear-gradient(160deg, ${accent} 0%, ${accent} 60%, var(--bg-2) 100%)`, borderRadius: 4, position: 'relative' }}>
          <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.4), transparent 60%)' }} />
        </div>
        <div>
          {[95, 82, 88, 70].map((w, i) => (
            <div key={i} style={{ height: 6, borderRadius: 2, background: 'var(--line-2)', marginBottom: 6, width: `${w}%` }} />
          ))}
          <div style={{ marginTop: 12, display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', borderTop: '1px solid var(--line)', paddingTop: 8 }}>
            <span className="h-serif" style={{ fontSize: 14 }}>Item — 01</span>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--muted)' }}>→</span>
          </div>
        </div>
      </div>
    </div>
  )
}

function NorthboundMock({ accent }: { accent: string }) {
  return (
    <div style={{ height: '100%', display: 'grid', gridTemplateColumns: '1fr', background: 'var(--paper)', padding: '20px 32px', overflow: 'hidden' }}>
      <div style={{ fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--muted)', display: 'flex', justifyContent: 'space-between' }}>
        <span>Reading view</span>
        <span style={{ color: accent }}>→ focus</span>
      </div>
      <article style={{ maxWidth: 360, margin: '10px auto 0', width: '100%' }}>
        <h4 className="h-serif" style={{ fontSize: 22, lineHeight: 1.1, margin: '0 0 12px', letterSpacing: '-0.01em' }}>
          Article title goes here<span style={{ color: accent }}>.</span>
        </h4>
        {[100, 94, 88, 96, 62, 92, 85].map((w, i) => (
          <div key={i} style={{ height: 6, borderRadius: 2, background: 'var(--line-2)', marginBottom: 6, width: `${w}%`, position: 'relative' }}>
            {i === 3 && (
              <span style={{ position: 'absolute', left: '30%', top: -2, width: '20%', height: 10, background: `${accent.replace(')', ' / 0.18)')}`, borderBottom: `1px solid ${accent}` }} />
            )}
          </div>
        ))}
      </article>
    </div>
  )
}

function HalftoneMock({ accent }: { accent: string }) {
  return (
    <div style={{ position: 'relative', height: '100%', background: '#111', color: '#eaeaea', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 12, border: '1px solid #2a2a2a', borderRadius: 6, overflow: 'hidden', background: `linear-gradient(135deg, ${accent} 0%, oklch(0.4 0.10 30) 60%, #181818 100%)` }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(0,0,0,0.25) 1px, transparent 1px)', backgroundSize: '100% 2px', mixBlendMode: 'overlay' }} />
        <div style={{ position: 'absolute', top: 12, left: 12, fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.14em', textTransform: 'uppercase', opacity: 0.8 }}>
          Tool · Live · v0.1
        </div>
        <div style={{ position: 'absolute', bottom: 12, left: 12, right: 12, display: 'flex', justifyContent: 'space-between', fontFamily: 'var(--font-mono)', fontSize: 9, letterSpacing: '.14em', textTransform: 'uppercase', opacity: 0.8 }}>
          <span>Channel 01</span><span>→</span><span>00:00:00</span>
        </div>
        <div style={{ position: 'absolute', top: '40%', left: '30%', width: 10, height: 10, background: '#fff', borderRadius: 999 }}>
          <div style={{ position: 'absolute', left: 14, top: -2, fontSize: 9, background: '#fff', color: '#111', padding: '2px 6px', borderRadius: 4 }}>user a</div>
        </div>
        <div style={{ position: 'absolute', top: '62%', left: '62%', width: 10, height: 10, background: accent, borderRadius: 999 }}>
          <div style={{ position: 'absolute', left: 14, top: -2, fontSize: 9, background: accent, color: '#fff', padding: '2px 6px', borderRadius: 4 }}>user b</div>
        </div>
      </div>
      <div style={{ position: 'absolute', left: 12, right: 12, bottom: -4, height: 24, display: 'flex', gap: 4 }}>
        {Array.from({ length: 14 }).map((_, i) => (
          <div key={i} style={{ flex: 1, background: i === 6 ? '#fff' : `oklch(0.${30 + i * 3} 0.05 ${30 + i * 8})`, borderRadius: 2, height: 18 }} />
        ))}
      </div>
    </div>
  )
}

function LumenMock({ accent }: { accent: string }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr', height: '100%' }}>
      <aside style={{ borderRight: '1px solid var(--line)', padding: 16, background: 'var(--bg)' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 14 }}>Sidebar</div>
        {[0, 1, 2, 3].map((i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 10px', marginBottom: 4, background: i === 1 ? 'var(--paper)' : 'transparent', borderRadius: 6, border: i === 1 ? `1px solid ${accent}` : '1px solid transparent' }}>
            <span style={{ width: 6, height: 6, borderRadius: 999, background: i === 1 ? accent : 'var(--muted)' }} />
            <span style={{ height: 6, borderRadius: 2, background: i === 1 ? 'var(--ink)' : 'var(--line-2)', flex: 1, opacity: i === 1 ? 0.9 : 1 }} />
          </div>
        ))}
      </aside>
      <main style={{ padding: 18, overflow: 'hidden' }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--muted)' }}>Detail view</div>
        <div style={{ height: 18, background: 'var(--line-2)', borderRadius: 3, margin: '10px 0 6px', width: '70%' }} />
        <div style={{ height: 8, background: 'var(--line)', borderRadius: 2, marginBottom: 14, width: '45%' }} />
        <div style={{ height: 1, background: 'var(--line)', margin: '12px 0' }} />
        {[92, 78, 84].map((w, i) => (
          <div key={i} style={{ height: 6, background: 'var(--line-2)', borderRadius: 2, marginBottom: 6, width: `${w}%` }} />
        ))}
      </main>
    </div>
  )
}

interface ProjectVisualsProps {
  project: Project
  progress: number
}

export default function ProjectVisuals({ project, progress }: ProjectVisualsProps) {
  const { accent, accent2, visual } = project
  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        background: `linear-gradient(160deg, ${accent2} 0%, var(--paper) 60%)`,
      }}
    >
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(rgba(20,19,15,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(20,19,15,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
        }}
      />
      <div
        style={{
          position: 'absolute',
          width: 380,
          height: 380,
          borderRadius: 999,
          background: `radial-gradient(circle, ${accent} 0%, transparent 65%)`,
          filter: 'blur(40px)',
          opacity: 0.55,
          top: -40,
          right: -60,
          transform: `translateY(${progress * -30}px)`,
        }}
      />
      {/* Mock browser window */}
      <div
        style={{
          position: 'absolute',
          top: '10%',
          left: '8%',
          right: '8%',
          bottom: '10%',
          background: 'var(--paper)',
          borderRadius: 12,
          border: '1px solid var(--line)',
          boxShadow: '0 30px 60px -30px rgba(20,19,15,0.20)',
          overflow: 'hidden',
          transform: `translateY(${progress * 18 - 9}px)`,
          transition: 'transform .25s cubic-bezier(.2,.7,.2,1)',
        }}
      >
        {/* Title bar */}
        <div
          style={{
            height: 32,
            borderBottom: '1px solid var(--line)',
            display: 'flex',
            alignItems: 'center',
            padding: '0 12px',
            gap: 6,
            background: 'var(--bg)',
          }}
        >
          {['#e5e1d7', '#e5e1d7', '#e5e1d7'].map((c, i) => (
            <span key={i} style={{ width: 9, height: 9, borderRadius: 999, background: c }} />
          ))}
          <span
            style={{
              marginLeft: 16,
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              color: 'var(--muted)',
              letterSpacing: '.08em',
            }}
          >
            {project.title.toLowerCase().replace(/\s+/g, '-')}.app
          </span>
        </div>
        {/* Content */}
        <div style={{ position: 'absolute', top: 32, left: 0, right: 0, bottom: 0 }}>
          {visual === 'manuscript' && <ManuscriptMock accent={accent} />}
          {visual === 'lumen'      && <LumenMock accent={accent} />}
          {visual === 'atelier'    && <AtelierMock accent={accent} />}
          {visual === 'northbound' && <NorthboundMock accent={accent} />}
          {visual === 'halftone'   && <HalftoneMock accent={accent} />}
        </div>
      </div>
    </div>
  )
}
