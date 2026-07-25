'use client'

import { useEffect, useRef } from 'react'

interface ParallaxWordProps {
  text: string
  top?: string
  left?: string
  right?: string
  speed?: number
  anchor?: 'left' | 'right'
}

/** Oversized watermark word that drifts as its section crosses the viewport. */
export default function ParallaxWord({
  text,
  top = '30%',
  left,
  right,
  speed = 0.25,
  anchor = 'left',
}: ParallaxWordProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const section = el.closest('section, footer')
    if (!section) return

    let raf = 0

    const update = () => {
      raf = 0
      const r = section.getBoundingClientRect()
      const vh = window.innerHeight
      const total = vh + r.height
      if (total <= 0) return
      const p = Math.max(-1, Math.min(2, (vh - r.top) / total))
      el.style.transform = `translate3d(0, ${-((p - 0.5) * vh * speed)}px, 0)`
    }

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [speed])

  const sideStyle =
    anchor === 'right'
      ? { right: right || '-2vw', left: 'auto', textAlign: 'right' as const }
      : { left: left || '-2vw', right: 'auto', textAlign: 'left' as const }

  return (
    <div ref={ref} className="pxword" aria-hidden="true" style={{ top, ...sideStyle }}>
      {text}
    </div>
  )
}
