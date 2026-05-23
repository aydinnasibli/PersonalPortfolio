'use client'

import { useEffect, useRef, useState } from 'react'
import type { Project } from '@/types'
import ProjectVisuals from './ProjectVisuals'

interface ProjectRowProps {
  project: Project
  index: number
  flipped: boolean
}

export default function ProjectRow({ project, index, flipped }: ProjectRowProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [scrollProg, setScrollProg] = useState(0)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const onScroll = () => {
      const r = el.getBoundingClientRect()
      const vh = window.innerHeight
      const start = vh
      const end = -r.height
      const total = start - end
      const passed = start - r.top
      const p = Math.max(0, Math.min(1, passed / total))
      setScrollProg(p)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scale = 0.94 + Math.min(scrollProg, 0.5) * 0.12
  const visualShift = (scrollProg - 0.5) * 30

  return (
    <div
      ref={ref}
      className="container"
      style={{ position: 'relative', padding: '80px 80px', marginTop: index === 0 ? 0 : 40 }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: flipped ? '0.9fr 1.1fr' : '1.1fr 0.9fr',
          gap: 64,
          alignItems: 'center',
        }}
      >
        {/* Visual */}
        <div style={{ order: flipped ? 2 : 1 }}>
          <div
            className="project-frame"
            data-cursor="view"
            data-cursor-label="Open case →"
            style={{
              aspectRatio: '4 / 3',
              transform: `scale(${scale}) translateY(${-visualShift}px)`,
              transition: 'transform .25s cubic-bezier(.2,.7,.2,1)',
              willChange: 'transform',
            }}
          >
            <ProjectVisuals project={project} progress={scrollProg} />
          </div>
        </div>

        {/* Text */}
        <div style={{ order: flipped ? 1 : 2 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 16,
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              letterSpacing: '.16em',
              textTransform: 'uppercase',
              color: 'var(--muted)',
            }}
          >
            <span style={{ color: 'var(--ink)' }}>—{project.n}</span>
            <span style={{ width: 18, height: 1, background: 'var(--line-2)' }} />
            <span>{project.year}</span>
            <span style={{ width: 18, height: 1, background: 'var(--line-2)' }} />
            <span>{project.role}</span>
          </div>

          <h3
            className="h-display"
            style={{
              fontSize: 'clamp(48px, 6vw, 96px)',
              lineHeight: 0.95,
              margin: '20px 0 8px',
              letterSpacing: '-0.04em',
            }}
          >
            {project.title}
          </h3>
          <div
            className="h-serif"
            style={{
              fontSize: 'clamp(22px, 2vw, 28px)',
              color: 'var(--ink-2)',
              lineHeight: 1.3,
              maxWidth: 480,
            }}
          >
            <em>{project.subtitle}</em>
          </div>

          <p
            style={{
              marginTop: 24,
              fontSize: 16,
              lineHeight: 1.6,
              color: 'var(--ink-2)',
              maxWidth: 460,
            }}
          >
            {project.description}
          </p>

          <div style={{ marginTop: 28, display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {project.tags.map((t) => (
              <span key={t} className="chip" style={{ padding: '8px 14px', fontSize: 11 }}>
                {t}
              </span>
            ))}
          </div>

          <div style={{ marginTop: 36, display: 'flex', gap: 24, alignItems: 'center' }}>
            <a
              className="link-undr"
              data-cursor="hover"
              href={project.live || '#'}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: 'var(--ink)',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Visit live site →
            </a>
            <a
              data-cursor="hover"
              href="#"
              style={{
                color: 'var(--muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Read notes
            </a>
            <a
              data-cursor="hover"
              href="#"
              style={{
                color: 'var(--muted)',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                letterSpacing: '.14em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Github
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
