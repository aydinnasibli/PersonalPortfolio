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
    const section = el.closest('section')
    if (!section) return
    let raf: number

    const onScroll = () => {
      const r = section.getBoundingClientRect()
      const vh = window.innerHeight
      const total = vh + r.height
      const passed = vh - r.top
      const p = Math.max(-1, Math.min(2, passed / total))
      const offsetY = (p - 0.5) * vh * speed
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        if (el) el.style.transform = `translate3d(0, ${-offsetY}px, 0)`
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      cancelAnimationFrame(raf)
    }
  }, [speed])

  const sideStyle =
    anchor === 'right'
      ? { right: right || '-2vw', left: 'auto', textAlign: 'right' as const }
      : { left: left || '-2vw', right: 'auto', textAlign: 'left' as const }

  return (
    <div ref={ref} className="pxword" style={{ top, ...sideStyle }}>
      {text}
    </div>
  )
}
