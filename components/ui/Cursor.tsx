'use client'

import { useEffect, useRef, useState } from 'react'

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)
  const [label, setLabel] = useState('')
  const stateRef = useRef({ x: 0, y: 0, tx: 0, ty: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      stateRef.current.tx = e.clientX
      stateRef.current.ty = e.clientY
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%,-50%)`
      }
    }

    let raf: number
    const tick = () => {
      const s = stateRef.current
      s.x += (s.tx - s.x) * 0.18
      s.y += (s.ty - s.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${s.x}px, ${s.y}px) translate(-50%,-50%)`
      }
      raf = requestAnimationFrame(tick)
    }
    tick()
    window.addEventListener('mousemove', onMove)

    const checkHover = (e: MouseEvent) => {
      const t = e.target
      if (!(t instanceof Element)) return
      const view = t.closest("[data-cursor='view']")
      const hover = t.closest("[data-cursor='hover'], a, button, .chip")
      if (view) {
        const lbl = view.getAttribute('data-cursor-label') || 'View'
        setLabel(lbl)
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
    window.addEventListener('mouseover', checkHover)
    window.addEventListener('mouseout', checkHover)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', checkHover)
      window.removeEventListener('mouseout', checkHover)
    }
  }, [])

  return (
    <>
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
    </>
  )
}
