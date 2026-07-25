import { Label, type MockProps, RuledPaper } from './primitives'

const NODES = [
  { id: 'plato',     name: 'Plato',      x: 18, y: 22 },
  { id: 'augustine', name: 'Augustine',  x: 50, y: 14 },
  { id: 'kant',      name: 'Kant',       x: 84, y: 22 },
  { id: 'spinoza',   name: 'Spinoza',    x: 10, y: 50 },
  { id: 'aristotle', name: 'Aristotle',  x: 48, y: 50, featured: true },
  { id: 'hegel',     name: 'Hegel',      x: 86, y: 56 },
  { id: 'hume',      name: 'Hume',       x: 20, y: 82 },
  { id: 'nietzsche', name: 'Nietzsche',  x: 66, y: 86 },
]

const EDGES: [string, string][] = [
  ['plato', 'aristotle'], ['aristotle', 'augustine'], ['aristotle', 'kant'],
  ['aristotle', 'hegel'], ['plato', 'spinoza'], ['spinoza', 'hume'],
  ['hume', 'kant'], ['kant', 'hegel'], ['hegel', 'nietzsche'],
]

const BY_ID = Object.fromEntries(NODES.map((n) => [n.id, n]))

/** The Living Manuscript — constellation on the left, reading panel on the right. */
export default function ManuscriptMock({ accent }: MockProps) {
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
        minWidth: 0,
      }}
    >
      {/* Constellation */}
      <div style={{ position: 'relative', borderRight: '1px solid var(--line)', overflow: 'hidden' }}>
        <RuledPaper step={26} />
        <div style={{ position: 'absolute', left: 16, top: 13 }}>
          <Label size={8.5}>Folio xii · the network</Label>
        </div>

        <svg
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        >
          {EDGES.map(([a, b], i) => {
            const A = BY_ID[a]
            const B = BY_ID[b]
            const hot = A.featured || B.featured
            const midX = (A.x + B.x) / 2 + (B.y - A.y) * 0.1
            const midY = (A.y + B.y) / 2 - (B.x - A.x) * 0.1
            return (
              <path
                key={i}
                d={`M ${A.x} ${A.y} Q ${midX} ${midY} ${B.x} ${B.y}`}
                stroke={hot ? accent : 'rgba(20,19,15,0.22)'}
                strokeOpacity={hot ? 0.55 : 1}
                strokeWidth={hot ? 0.22 : 0.15}
                fill="none"
              />
            )
          })}
        </svg>

        {NODES.map((n) => (
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
              gap: 3,
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
                fontSize: n.featured ? 21 : 11.5,
                lineHeight: 1,
                letterSpacing: '-0.015em',
                color: n.featured ? 'var(--ink)' : 'var(--ink-2)',
              }}
            >
              {n.name}
            </span>
            {n.featured && (
              <span
                style={{
                  color: accent,
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: 21,
                  lineHeight: 1,
                }}
              >
                .
              </span>
            )}
          </div>
        ))}

        <div
          style={{
            position: 'absolute',
            left: 16,
            right: 16,
            bottom: 11,
            display: 'flex',
            justifyContent: 'space-between',
            gap: 8,
          }}
        >
          <Label size={8}>10 thinkers · 4 eras</Label>
          <Label size={8}>
            <b style={{ color: 'var(--ink)', fontWeight: 500 }}>/</b> search
          </Label>
        </div>
      </div>

      {/* Reading panel */}
      <div
        style={{
          position: 'relative',
          padding: '16px 14px 12px',
          display: 'flex',
          flexDirection: 'column',
          background: 'linear-gradient(180deg, #FCFBF9 0%, #f7f3ec 100%)',
          overflow: 'hidden',
          minWidth: 0,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 7 }}>
          <span style={{ width: 13, height: 1, background: 'var(--ink)', flexShrink: 0 }} />
          <Label size={8}>Currently reading</Label>
        </div>

        <div
          className="h-serif"
          style={{
            marginTop: 9,
            fontSize: 25,
            lineHeight: 0.92,
            letterSpacing: '-0.03em',
            color: 'var(--ink)',
          }}
        >
          Aristotle<span style={{ color: accent }}>.</span>
        </div>
        <Label size={7.5} style={{ display: 'block', marginTop: 5, letterSpacing: '.14em' }}>
          384 – 322 BC · Stagira
        </Label>

        <div style={{ height: 1, background: 'var(--line)', margin: '13px 0 11px' }} />

        <div
          style={{
            fontFamily: 'var(--font-serif)',
            fontStyle: 'italic',
            fontSize: 11.5,
            lineHeight: 1.45,
            color: 'var(--ink-2)',
          }}
        >
          &ldquo;We are what we repeatedly do. Excellence, then, is not an act, but a habit.&rdquo;
        </div>

        <div style={{ marginTop: 'auto' }}>
          <Label size={7.5} style={{ display: 'block', marginBottom: 5 }}>
            Lineage
          </Label>
          <div
            style={{
              fontFamily: 'var(--font-serif)',
              fontStyle: 'italic',
              fontSize: 12,
              lineHeight: 1.35,
              color: 'var(--ink-2)',
            }}
          >
            Plato ·{' '}
            <span
              style={{
                color: 'var(--ink)',
                borderBottom: `1px solid ${accent}`,
                paddingBottom: 1,
              }}
            >
              Aristotle
            </span>{' '}
            · Kant
          </div>
        </div>

        <div
          style={{
            marginTop: 11,
            paddingTop: 9,
            borderTop: '1px solid var(--line)',
            display: 'flex',
            justifyContent: 'space-between',
            gap: 8,
          }}
        >
          <Label size={7.5}>Entry — 06</Label>
          <Label size={7.5} color="var(--ink)">
            Open →
          </Label>
        </div>
      </div>
    </div>
  )
}
