'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Custom pointer. Activation is a CSS concern, not a React one: the elements
 * always render hidden, and adding `cursor-ready` to <html> reveals them and
 * hides the system cursor. That keeps the effect free of setState (which would
 * cascade a render) and means a failure to mount simply leaves the normal
 * cursor in place.
 */
export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const stateRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 })

  useEffect(() => {
    // Only take over the pointer where there is one, and only when motion is
    // welcome. Previously the rAF loop also ran on phones, animating an
    // element the stylesheet had already set to display:none.
    if (
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    const root = document.documentElement
    root.classList.add('cursor-ready')

    const onMove = (e: MouseEvent) => {
      stateRef.current.tx = e.clientX
      stateRef.current.ty = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`
      }
    }

    let raf = 0
    const tick = () => {
      const s = stateRef.current
      s.x += (s.tx - s.x) * 0.18
      s.y += (s.ty - s.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%,-50%)`
      }
      raf = requestAnimationFrame(tick)
    }

    const start = () => {
      if (!raf) raf = requestAnimationFrame(tick)
    }
    const stop = () => {
      if (raf) {
        cancelAnimationFrame(raf)
        raf = 0
      }
    }

    // No point animating a cursor in a background tab.
    const onVisibility = () => (document.hidden ? stop() : start())

    const checkHover = (e: MouseEvent) => {
      const t = e.target
      if (!(t instanceof Element)) return
      const view = t.closest("[data-cursor='view']")
      const hover = t.closest("[data-cursor='hover'], a, button, .chip")
      if (view) {
        setLabel(view.getAttribute('data-cursor-label') || 'View')
        ringRef.current?.classList.add('is-view')
        ringRef.current?.classList.remove('is-hover')
      } else if (hover) {
        ringRef.current?.classList.add('is-hover')
        ringRef.current?.classList.remove('is-view')
        setLabel('')
      } else {
        ringRef.current?.classList.remove('is-hover', 'is-view')
        setLabel('')
      }
    }

    start()
    window.addEventListener('mousemove', onMove)
    window.addEventListener('mouseover', checkHover)
    window.addEventListener('mouseout', checkHover)
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      root.classList.remove('cursor-ready')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', checkHover)
      window.removeEventListener('mouseout', checkHover)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div aria-hidden="true">
      <div ref={ringRef} className="cursor">
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            height: '100%',
          }}
        >
          <span className="cursor-label">{label}</span>
        </div>
      </div>
      <div ref={dotRef} className="cursor-dot" />
    </div>
  )
}
