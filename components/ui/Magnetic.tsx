'use client'

import { useEffect, useRef } from 'react'

interface MagneticProps extends React.HTMLAttributes<HTMLDivElement> {
  strength?: number
  children: React.ReactNode
}

export default function Magnetic({ strength = 0.3, children, style, ...rest }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    let raf: number

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const cx = r.left + r.width / 2
      const cy = r.top + r.height / 2
      const dx = (e.clientX - cx) * strength
      const dy = (e.clientY - cy) * strength
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        el.style.transform = `translate(${dx}px, ${dy}px)`
      })
    }

    const leave = () => {
      cancelAnimationFrame(raf)
      el.style.transform = 'translate(0,0)'
    }

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)
    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
      cancelAnimationFrame(raf)
    }
  }, [strength])

  return (
    <div
      ref={ref}
      style={{
        display: 'inline-block',
        transition: 'transform .5s cubic-bezier(.2,.7,.2,1)',
        willChange: 'transform',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
