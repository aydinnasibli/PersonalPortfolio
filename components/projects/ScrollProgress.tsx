'use client'

import { useEffect, useRef, type ReactNode } from 'react'

/**
 * Publishes the element's scroll progress (0 → 1 as it crosses the viewport)
 * as a `--p` custom property, which descendants read from CSS.
 *
 * Deliberately writes to the DOM rather than React state: the previous version
 * called setState on every scroll event, re-rendering the whole mock subtree
 * dozens of times a second. `--p` inherits, so the same value drives several
 * transforms with one write and zero re-renders.
 *
 * Children are passed in from a server component, so the project mocks never
 * enter the client bundle.
 */
/**
 * The mocks are drawn at a fixed pixel scale, so they are laid out on a canvas
 * of this width and then scaled to whatever the frame actually is. Without it
 * a phone gives them ~278px and the denser mocks overflow their own frame.
 */
const DESIGN_WIDTH = 420

export default function ScrollProgress({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const stage = el.querySelector<HTMLElement>('.pv-viewport')

    // Fit the fixed-size mock canvas to the real frame.
    const fitStage = () => {
      if (!stage) return
      const { clientWidth: w, clientHeight: h } = stage
      if (!w || !h) return
      const scale = w / DESIGN_WIDTH
      el.style.setProperty('--mock-scale', scale.toFixed(4))
      el.style.setProperty('--stage-h', `${(h / scale).toFixed(2)}px`)
    }

    fitStage()

    const ro = new ResizeObserver(fitStage)
    if (stage) ro.observe(stage)

    // With reduced motion the CSS drops the parallax entirely; hold the
    // mid-point so anything reading --p still gets a sensible value. The
    // stage still needs fitting, so the observer stays connected.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.setProperty('--p', '0.5')
      return () => ro.disconnect()
    }

    let raf = 0

    const update = () => {
      raf = 0
      const r = el.getBoundingClientRect()
      const total = window.innerHeight + r.height
      if (total <= 0) return
      const p = Math.min(1, Math.max(0, (window.innerHeight - r.top) / total))
      el.style.setProperty('--p', p.toFixed(4))
    }

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', schedule, { passive: true })
    window.addEventListener('resize', schedule)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      ro.disconnect()
      window.removeEventListener('scroll', schedule)
      window.removeEventListener('resize', schedule)
    }
  }, [])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}
