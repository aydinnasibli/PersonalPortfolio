'use client'

import { useEffect, useRef } from 'react'

interface MagneticProps extends React.HTMLAttributes<HTMLDivElement> {
  strength?: number
  children: React.ReactNode
}

/** Pulls its child toward the pointer. Pure decoration — skipped on touch
 *  devices and when reduced motion is requested. */
export default function Magnetic({ strength = 0.3, children, style, ...rest }: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (
      !window.matchMedia('(pointer: fine)').matches ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      return
    }

    let raf = 0

    const move = (e: MouseEvent) => {
      const r = el.getBoundingClientRect()
      const dx = (e.clientX - (r.left + r.width / 2)) * strength
      const dy = (e.clientY - (r.top + r.height / 2)) * strength
      if (raf) cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        raf = 0
        el.style.transform = `translate(${dx}px, ${dy}px)`
      })
    }

    const leave = () => {
      if (raf) cancelAnimationFrame(raf)
      raf = 0
      el.style.transform = 'translate(0,0)'
    }

    el.addEventListener('mousemove', move)
    el.addEventListener('mouseleave', leave)

    return () => {
      el.removeEventListener('mousemove', move)
      el.removeEventListener('mouseleave', leave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [strength])

  return (
    <div
      ref={ref}
      style={{
        display: 'inline-block',
        maxWidth: '100%',
        transition: 'transform .5s cubic-bezier(.2,.7,.2,1)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  )
}
