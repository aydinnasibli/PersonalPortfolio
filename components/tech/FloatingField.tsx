'use client'

import { useEffect, useRef, useState } from 'react'
import Magnetic from '@/components/ui/Magnetic'
import { STACK } from '@/lib/data'
import type { StackItem } from '@/types'

function FloatingChip({
  item,
  onHover,
}: {
  item: StackItem
  onHover: (item: StackItem | null) => void
}) {
  const elRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = elRef.current
    if (!el) return
    const dur = 8 + Math.random() * 6
    const delay = -Math.random() * dur
    el.style.animation = `floatY ${dur}s ease-in-out ${delay}s infinite`
  }, [])

  return (
    <div
      ref={elRef}
      style={{
        position: 'absolute',
        left: `${item.x}%`,
        top: `${item.y}%`,
        transform: 'translate(-50%,-50%)',
        zIndex: 2,
      }}
      onMouseEnter={() => onHover(item)}
      onMouseLeave={() => onHover(null)}
    >
      <Magnetic strength={0.35}>
        <span
          className="chip"
          style={{
            fontSize: 13 * item.size,
            padding: `${10 * item.size}px ${16 * item.size}px`,
          }}
        >
          <span className="glyph" />
          {item.name}
        </span>
      </Magnetic>
    </div>
  )
}

export default function FloatingField() {
  const [hover, setHover] = useState<StackItem | null>(null)

  return (
    <div
      className="rv"
      style={{
        position: 'relative',
        height: 520,
        borderRadius: 24,
        border: '1px solid var(--line)',
        background: 'linear-gradient(160deg, var(--paper) 0%, var(--bg) 100%)',
        overflow: 'hidden',
      }}
    >
      {/* Faint grid */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'linear-gradient(var(--line) 1px, transparent 1px), linear-gradient(90deg, var(--line) 1px, transparent 1px)',
          backgroundSize: '48px 48px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
        }}
      />

      {/* Centre label */}
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%,-50%)',
          textAlign: 'center',
        }}
      >
        <div className="h-serif" style={{ fontSize: 34, color: 'var(--ink-2)' }}>
          a small set,
        </div>
        <div className="h-serif" style={{ fontSize: 34, color: 'var(--ink-2)' }}>
          deeply known.
        </div>
        <div
          style={{
            marginTop: 12,
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '.18em',
            textTransform: 'uppercase',
            color: 'var(--muted)',
          }}
        >
          {hover ? hover.note : 'Hover any tool'}
        </div>
      </div>

      {/* Chips */}
      {STACK.map((t) => (
        <FloatingChip key={t.name} item={t} onHover={setHover} />
      ))}
    </div>
  )
}
