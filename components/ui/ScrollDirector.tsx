'use client'

import { useEffect, useRef, useState } from 'react'

interface ReaderState {
  num: string
  name: string
  progress: number
  visible: boolean
}

const SECTIONS = [
  { sel: "[data-section-index='00']", num: '00', name: 'A note' },
  { sel: "[data-section-index='01']", num: '01', name: 'Selected work' },
  { sel: "[data-section-index='02']", num: '02', name: 'Tools' },
  { sel: "[data-section-index='03']", num: '03', name: 'Process' },
  { sel: "[data-section-index='04']", num: '04', name: 'Contact' },
]

export default function ScrollDirector() {
  const [reader, setReader] = useState<ReaderState>({
    num: '00',
    name: 'Cover',
    progress: 0,
    visible: false,
  })
  const mouseRef = useRef({ mx: 0, my: 0 })
  const scrollRef = useRef({ y: 0, target: 0 })

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const finePointer = window.matchMedia('(pointer: fine)').matches

    const l1 = document.getElementById('cv-l1')
    const l2 = document.getElementById('cv-l2')
    const l3 = document.getElementById('cv-l3')

    // Resolved once. The previous version ran six querySelector calls plus a
    // pair of forced layout reads on every animation frame.
    const sections = SECTIONS.map((s) => ({
      ...s,
      el: document.querySelector<HTMLElement>(s.sel),
    })).filter((s): s is typeof s & { el: HTMLElement } => s.el !== null)
    const heroEl = document.querySelector<HTMLElement>('.hero')

    // Section bounds only change on resize, so cache them there.
    let bounds: { num: string; name: string; top: number; bottom: number }[] = []
    let heroBottom = 0

    const measure = () => {
      bounds = sections.map((s) => ({
        num: s.num,
        name: s.name,
        top: s.el.offsetTop,
        bottom: s.el.offsetTop + s.el.offsetHeight,
      }))
      heroBottom = heroEl ? heroEl.offsetTop + heroEl.offsetHeight - 200 : 0
    }
    measure()

    const onResize = () => measure()
    window.addEventListener('resize', onResize)

    const onMove = (e: MouseEvent) => {
      mouseRef.current.mx = (e.clientX / window.innerWidth - 0.5) * 2
      mouseRef.current.my = (e.clientY / window.innerHeight - 0.5) * 2
    }
    if (!reduced && finePointer) window.addEventListener('mousemove', onMove)

    const onScroll = () => {
      scrollRef.current.target = window.scrollY
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    let raf = 0

    const tick = () => {
      const s = scrollRef.current
      s.y += (s.target - s.y) * 0.12
      const sy = s.y
      const { mx, my } = mouseRef.current

      if (!reduced) {
        if (l1) l1.style.transform = `translate3d(${mx * 18}px, ${sy * -0.16 + my * 14}px, 0)`
        if (l2) l2.style.transform = `translate3d(${mx * -22}px, ${sy * -0.1 + my * -10}px, 0)`
        if (l3) l3.style.transform = `translate3d(${mx * 12}px, ${sy * -0.22 + my * 18}px, 0)`
      }

      const vc = window.scrollY + window.innerHeight * 0.5
      const docH = document.documentElement.scrollHeight - window.innerHeight
      const docProg = docH > 0 ? Math.max(0, Math.min(1, window.scrollY / docH)) : 0
      const active = bounds.find((b) => vc >= b.top && vc < b.bottom) ?? null
      const visible = window.scrollY > heroBottom

      setReader((prev) => {
        const next = active
          ? { num: active.num, name: active.name, progress: docProg, visible }
          : { ...prev, progress: docProg, visible }
        if (
          next.num === prev.num &&
          next.name === prev.name &&
          Math.abs(next.progress - prev.progress) < 0.005 &&
          next.visible === prev.visible
        ) {
          return prev
        }
        return next
      })

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
    const onVisibility = () => (document.hidden ? stop() : start())

    start()
    document.addEventListener('visibilitychange', onVisibility)

    return () => {
      stop()
      window.removeEventListener('resize', onResize)
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
      document.removeEventListener('visibilitychange', onVisibility)
    }
  }, [])

  return (
    <div
      className="reader"
      aria-hidden="true"
      style={{
        opacity: reader.visible ? 1 : 0,
        transform: reader.visible ? 'translateY(0)' : 'translateY(20px)',
      }}
    >
      <span className="num">— {reader.num}</span>
      <span className="name">
        <b>{reader.name}</b>
      </span>
      <span className="bar">
        <i style={{ transform: `scaleX(${reader.progress})` }} />
      </span>
    </div>
  )
}
