'use client'

export default function BackToTop() {
  return (
    <a
      data-cursor="hover"
      href="#"
      style={{ color: 'var(--muted)', textDecoration: 'none' }}
      onClick={(e) => {
        e.preventDefault()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }}
    >
      ↑ Back to top
    </a>
  )
}
