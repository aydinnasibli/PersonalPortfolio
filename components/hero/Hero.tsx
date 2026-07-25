'use client'

import { useEffect, useState } from 'react'

interface Parallax {
  x: number
  y: number
}

function OutlineLetter({ letter, size = '1em' }: { letter: string; size?: string }) {
  return (
    <span
      style={{
        display: 'inline-block',
        fontSize: size,
        WebkitTextStroke: '1.5px var(--ink)',
        color: 'transparent',
        letterSpacing: '-0.04em',
      }}
    >
      {letter}
    </span>
  )
}

function Crosshair({ top, left }: { top: string; left: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'absolute',
        top,
        left,
        width: 14,
        height: 14,
        pointerEvents: 'none',
        transform: 'translate(-50%,-50%)',
      }}
    >
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: 0,
          bottom: 0,
          width: 1,
          background: 'var(--ink)',
          opacity: 0.4,
          transform: 'translateX(-50%)',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          right: 0,
          height: 1,
          background: 'var(--ink)',
          opacity: 0.4,
          transform: 'translateY(-50%)',
        }}
      />
    </div>
  )
}

function ScrollHint() {
  return (
    <div
      className="rv label-mono"
      aria-hidden="true"
      style={{ display: 'flex', alignItems: 'center', gap: 12, color: 'var(--ink)' }}
    >
      <span>Scroll</span>
      <div
        style={{
          width: 38,
          height: 1,
          background: 'var(--ink)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'var(--bg)',
            animation: 'wipe 2.2s infinite cubic-bezier(.7,0,.2,1)',
          }}
        />
      </div>
    </div>
  )
}

const CARD_NODES = [
  { name: 'Plato', x: 22, y: 30 },
  { name: 'Kant', x: 72, y: 30 },
  { name: 'Hegel', x: 78, y: 73 },
  { name: 'Hume', x: 30, y: 80 },
  { name: 'Aristotle', x: 48, y: 50, featured: true },
]

const CARD_EDGES: [number, number, number, number, number, number][] = [
  [22, 18, 36, 28, 48, 30],
  [48, 30, 62, 22, 72, 18],
  [48, 30, 64, 38, 78, 44],
  [22, 18, 24, 36, 30, 48],
  [30, 48, 56, 50, 78, 44],
]

/**
 * Decorative preview of the featured project. aria-hidden: the same project
 * appears in full, with a real link, in the work section below.
 */
function PeekCard({ parallax }: { parallax: Parallax }) {
  const [hover, setHover] = useState(false)
  const accent = 'oklch(0.55 0.18 268)'
  const tilt = {
    rx: parallax.y * (hover ? 6 : 3),
    ry: parallax.x * (hover ? -8 : -4),
  }

  return (
    <div
      className="rv"
      aria-hidden="true"
      style={{ perspective: 1200 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        style={{
          position: 'relative',
          width: 'clamp(260px, 26vw, 380px)',
          maxWidth: '100%',
          aspectRatio: '4 / 5',
          background: 'var(--paper)',
          border: '1px solid var(--line)',
          borderRadius: 14,
          boxShadow: hover
            ? '0 50px 100px -30px rgba(20,19,15,0.32), 0 16px 40px -16px rgba(20,19,15,0.16)'
            : '0 28px 60px -24px rgba(20,19,15,0.22), 0 8px 20px -10px rgba(20,19,15,0.12)',
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) rotate(${hover ? -1 : -3}deg)`,
          transformStyle: 'preserve-3d',
          transition: 'transform .5s cubic-bezier(.2,.7,.2,1), box-shadow .5s',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 14,
            left: 14,
            right: 14,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            zIndex: 2,
          }}
        >
          <span>Current / 02</span>
          <span>2026</span>
        </div>

        <div
          style={{
            position: 'absolute',
            top: 44,
            left: 14,
            right: 14,
            aspectRatio: '16/11',
            borderRadius: 8,
            overflow: 'hidden',
            background: '#FCFBF9',
            border: '1px solid var(--line)',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'repeating-linear-gradient(180deg, transparent 0 16px, rgba(20,19,15,0.045) 16px 17px)',
              maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
              WebkitMaskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
            }}
          />
          <svg
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          >
            {CARD_EDGES.map((p, i) => {
              const hot = i === 1 || i === 2
              return (
                <path
                  key={i}
                  d={`M ${p[0]} ${p[1]} Q ${p[2]} ${p[3]} ${p[4]} ${p[5]}`}
                  stroke={hot ? accent : 'rgba(20,19,15,0.22)'}
                  strokeOpacity={hot ? 0.5 : 1}
                  strokeWidth={hot ? 0.35 : 0.25}
                  fill="none"
                />
              )
            })}
          </svg>
          {CARD_NODES.map((n) => (
            <div
              key={n.name}
              style={{
                position: 'absolute',
                left: `${n.x}%`,
                top: `${n.y}%`,
                transform: 'translate(-50%,-50%)',
                background: '#FCFBF9',
                padding: n.featured ? '1px 5px' : '1px 4px',
                whiteSpace: 'nowrap',
                zIndex: n.featured ? 3 : 2,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontStyle: 'italic',
                  fontSize: n.featured ? 15 : 9.5,
                  lineHeight: 1,
                  color: n.featured ? 'var(--ink)' : 'var(--ink-2)',
                }}
              >
                {n.name}
              </span>
            </div>
          ))}
        </div>

        <div style={{ position: 'absolute', left: 16, right: 16, bottom: 16 }}>
          <div
            className="h-display"
            style={{ fontSize: 24, lineHeight: 0.95, letterSpacing: '-0.03em' }}
          >
            The Living
            <br />
            Manuscript
            <span style={{ color: accent }}>.</span>
          </div>
          <div className="h-serif" style={{ fontSize: 13, color: 'var(--ink-2)', marginTop: 4 }}>
            A living map of Western thought.
          </div>
          <div
            style={{
              marginTop: 10,
              paddingTop: 10,
              borderTop: '1px solid var(--line)',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: 10,
              letterSpacing: '.14em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            <span>Next.js · MongoDB</span>
            <span style={{ color: 'var(--ink)' }}>Open →</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Hero() {
  const [parallax, setParallax] = useState<Parallax>({ x: 0, y: 0 })

  useEffect(() => {
    // Pointer parallax is decoration; skip the listener entirely for touch
    // devices and anyone who asked for reduced motion.
    if (
      window.matchMedia('(prefers-reduced-motion: reduce)').matches ||
      !window.matchMedia('(pointer: fine)').matches
    ) {
      return
    }

    const onMove = (e: MouseEvent) => {
      setParallax({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2,
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section className="hero">
      <div
        className="orb"
        aria-hidden="true"
        style={{
          width: 520,
          height: 520,
          maxWidth: '100vw',
          background: 'radial-gradient(circle, oklch(0.74 0.16 268 / 0.50), transparent 65%)',
          top: -120,
          right: -80,
          transform: `translate(${parallax.x * -36}px, ${parallax.y * -36}px)`,
          transition: 'transform .9s cubic-bezier(.2,.7,.2,1)',
        }}
      />
      <div
        className="orb"
        aria-hidden="true"
        style={{
          width: 380,
          height: 380,
          maxWidth: '100vw',
          background: 'radial-gradient(circle, oklch(0.80 0.14 340 / 0.36), transparent 65%)',
          top: '38%',
          left: '42%',
          transform: `translate(${parallax.x * 14}px, ${parallax.y * 14}px)`,
          transition: 'transform .9s cubic-bezier(.2,.7,.2,1)',
          opacity: 0.7,
        }}
      />

      <Crosshair top="14%" left="6%" />
      <Crosshair top="86%" left="92%" />
      <Crosshair top="84%" left="10%" />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div
          className="mask-line label-mono"
          style={{
            letterSpacing: '.22em',
            marginBottom: 28,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span style={{ width: 22, height: 1, background: 'var(--ink)' }} />
          <span>
            Portfolio Vol. 04 — <b style={{ color: 'var(--ink)', fontWeight: 500 }}>2026</b>
          </span>
        </div>

        <div className="hero-grid">
          <div style={{ minWidth: 0 }}>
            {/* The page's single h1. It was previously a div, which left the
                document with no top-level heading at all. */}
            <h1 className="h-display hero-name" style={{ margin: 0 }}>
              <span className="mask-line">
                <span>Aydin</span>
              </span>
              <span className="mask-line" style={{ display: 'block' }}>
                <span>
                  Nasi
                  <span style={{ display: 'inline-block', transform: 'translateY(-0.04em)' }}>
                    <OutlineLetter letter="b" size="0.95em" />
                  </span>
                  li<span style={{ color: 'oklch(0.55 0.18 268)' }}>.</span>
                </span>
              </span>
            </h1>

            <p className="h-serif hero-lede" style={{ margin: '44px 0 0' }}>
              <span className="mask-line">
                <span>A full-stack web developer building</span>
              </span>
              <span className="mask-line">
                <span>
                  <em>unhurried, considered</em> software —
                </span>
              </span>
              <span className="mask-line">
                <span>
                  from <em>schema</em> to <em>cursor</em>.
                </span>
              </span>
            </p>
          </div>

          <div className="hero-card-col">
            <PeekCard parallax={parallax} />
          </div>
        </div>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2, marginTop: 64 }}>
        <div className="hero-ticker">
          <div className="rv hero-disciplines">
            <span style={{ color: 'var(--ink)' }}>Disciplines</span>
            <span style={{ width: 18, height: 1, background: 'var(--line-2)' }} />
            <span>Frontend</span>
            <span className="hero-dot" />
            <span>Backend</span>
            <span className="hero-dot" />
            <span>Interface design</span>
            <span className="hero-dot" />
            <span>Data viz</span>
          </div>
          <ScrollHint />
        </div>
      </div>
    </section>
  )
}
