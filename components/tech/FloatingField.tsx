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
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Randomised in an effect rather than during render, so the server and
    // client markup agree.
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

/**
 * Decorative scatter of the stack. aria-hidden — TechStack renders the same
 * list as real text alongside it, which is what assistive tech reads.
 */
export default function FloatingField() {
  const [hover, setHover] = useState<StackItem | null>(null)

  return (
    <div className="rv tech-field" aria-hidden="true">
      <div
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

      <div className="tech-centre">
        <div className="h-serif tech-centre-line">a small set,</div>
        <div className="h-serif tech-centre-line">deeply known.</div>
        <div className="label-mono" style={{ marginTop: 12, letterSpacing: '.18em' }}>
          {hover ? hover.note : 'Hover any tool'}
        </div>
      </div>

      {STACK.map((t) => (
        <FloatingChip key={t.name} item={t} onHover={setHover} />
      ))}
    </div>
  )
}
