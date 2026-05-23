'use client'

import { useEffect, useState } from 'react'
import Magnetic from '@/components/ui/Magnetic'

interface Parallax {
  x: number
  y: number
}

function OutlineN({ size = '1em', letter = 'n' }: { size?: string; letter?: string }) {
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
      aria-hidden
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
      className="rv"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--ink)',
      }}
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

function PeekCard({ parallax }: { parallax: Parallax }) {
  const [hover, setHover] = useState(false)
  const tilt = {
    rx: parallax.y * (hover ? 6 : 3),
    ry: parallax.x * (hover ? -8 : -4),
  }

  const nodes = [
    { name: 'Plato', x: 22, y: 30 },
    { name: 'Kant', x: 72, y: 30 },
    { name: 'Hegel', x: 78, y: 73 },
    { name: 'Hume', x: 30, y: 80 },
    { name: 'Aristotle', x: 48, y: 50, featured: true },
  ]

  const edges: [number, number, number, number, number, number][] = [
    [22, 18, 36, 28, 48, 30],
    [48, 30, 62, 22, 72, 18],
    [48, 30, 64, 38, 78, 44],
    [22, 18, 24, 36, 30, 48],
    [30, 48, 56, 50, 78, 44],
  ]

  return (
    <div
      className="rv"
      style={{ perspective: 1200 }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        data-cursor="view"
        data-cursor-label="See work →"
        style={{
          position: 'relative',
          width: 'clamp(280px, 26vw, 380px)',
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
        {/* Top tag */}
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
          <span>Current / 01</span>
          <span>2026</span>
        </div>

        {/* Visual — constellation */}
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
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              background:
                'repeating-linear-gradient(180deg, transparent 0 16px, rgba(20,19,15,0.045) 16px 17px)',
              maskImage: 'radial-gradient(ellipse at center, black 60%, transparent 100%)',
              WebkitMaskImage:
                'radial-gradient(ellipse at center, black 60%, transparent 100%)',
            }}
          />
          <div
            style={{
              position: 'absolute',
              left: 10,
              top: 8,
              fontFamily: 'var(--font-mono)',
              fontSize: 7,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            Folio xii
          </div>
          <svg
            viewBox="0 0 100 60"
            preserveAspectRatio="none"
            style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
          >
            {edges.map((p, i) => (
              <path
                key={i}
                d={`M ${p[0]} ${p[1]} Q ${p[2]} ${p[3]} ${p[4]} ${p[5]}`}
                stroke={i === 1 || i === 2 ? 'oklch(0.55 0.18 268)' : 'rgba(20,19,15,0.22)'}
                strokeOpacity={i === 1 || i === 2 ? 0.5 : 1}
                strokeWidth={i === 1 || i === 2 ? 0.35 : 0.25}
                fill="none"
              />
            ))}
          </svg>
          {nodes.map((n) => (
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
                  letterSpacing: '-0.015em',
                  color: n.featured ? 'var(--ink)' : 'var(--ink-2)',
                }}
              >
                {n.name}
              </span>
              {n.featured && (
                <span
                  style={{
                    color: 'oklch(0.55 0.18 268)',
                    fontFamily: 'var(--font-serif)',
                    fontStyle: 'italic',
                    fontSize: 15,
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
              left: 10,
              right: 10,
              bottom: 7,
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'var(--font-mono)',
              fontSize: 6.5,
              letterSpacing: '.22em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            <span>47 thinkers</span>
            <span>/ search</span>
          </div>
        </div>

        {/* Title block */}
        <div style={{ position: 'absolute', left: 16, right: 16, bottom: 16 }}>
          <div
            className="h-display"
            style={{ fontSize: 26, lineHeight: 0.95, letterSpacing: '-0.03em' }}
          >
            The Living
            <br />
            Manuscript
            <span style={{ color: 'oklch(0.55 0.18 268)' }}>.</span>
          </div>
          <div
            className="h-serif"
            style={{ fontSize: 14, color: 'var(--ink-2)', marginTop: 4 }}
          >
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
    const onMove = (e: MouseEvent) => {
      const w = window.innerWidth
      const h = window.innerHeight
      setParallax({
        x: (e.clientX / w - 0.5) * 2,
        y: (e.clientY / h - 0.5) * 2,
      })
    }
    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      className="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        padding: '120px 0 60px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      }}
    >
      {/* Foreground parallax orbs */}
      <div
        className="orb"
        style={{
          width: 520,
          height: 520,
          background: 'radial-gradient(circle, oklch(0.74 0.16 268 / 0.50), transparent 65%)',
          top: -120,
          right: -80,
          transform: `translate(${parallax.x * -36}px, ${parallax.y * -36}px)`,
          transition: 'transform .9s cubic-bezier(.2,.7,.2,1)',
        }}
      />
      <div
        className="orb"
        style={{
          width: 380,
          height: 380,
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
        {/* Index marker */}
        <div
          className="mask-line"
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '.22em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
            marginBottom: 28,
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <span style={{ width: 22, height: 1, background: 'var(--ink)' }} />
          <span>
            Portfolio Vol. 04 —{' '}
            <b style={{ color: 'var(--ink)', fontWeight: 500 }}>2026</b>
          </span>
        </div>

        {/* Headline grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: 56,
            alignItems: 'start',
          }}
        >
          {/* Left: name */}
          <div>
            <div
              className="mask-line h-display"
              style={{ fontSize: 'clamp(64px, 13vw, 232px)' }}
            >
              <span>Aydin</span>
            </div>
            <div
              className="mask-line h-display"
              style={{
                fontSize: 'clamp(64px, 13vw, 232px)',
                display: 'flex',
                alignItems: 'baseline',
              }}
            >
              <span>
                Nasi
                <span style={{ display: 'inline-block', transform: 'translateY(-0.04em)' }}>
                  <OutlineN letter="b" size="0.95em" />
                </span>
                li<span style={{ color: 'oklch(0.55 0.18 268)' }}>.</span>
              </span>
            </div>

            {/* Intro */}
            <div
              style={{
                marginTop: 44,
                maxWidth: 560,
                paddingLeft: 'clamp(0px, 6vw, 96px)',
              }}
            >
              <div
                className="h-serif"
                style={{
                  fontSize: 'clamp(24px, 2.2vw, 34px)',
                  lineHeight: 1.3,
                  color: 'var(--ink)',
                }}
              >
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
              </div>
            </div>
          </div>

          {/* Right: peek card */}
          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingTop: 8 }}>
            <PeekCard parallax={parallax} />
          </div>
        </div>
      </div>

      {/* Bottom ticker */}
      <div className="container" style={{ position: 'relative', zIndex: 2, marginTop: 80 }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderTop: '1px solid var(--line)',
            paddingTop: 22,
            gap: 24,
          }}
        >
          <div
            className="rv"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 18,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.18em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
              overflow: 'hidden',
            }}
          >
            <span style={{ color: 'var(--ink)' }}>Disciplines</span>
            <span style={{ width: 18, height: 1, background: 'var(--line-2)' }} />
            <span>Frontend</span>
            <span
              style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--ink)' }}
            />
            <span>Backend</span>
            <span
              style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--ink)' }}
            />
            <span>Interface design</span>
            <span
              style={{ width: 4, height: 4, borderRadius: 999, background: 'var(--ink)' }}
            />
            <span>Data viz</span>
          </div>
          <ScrollHint />
        </div>
      </div>
    </section>
  )
}
