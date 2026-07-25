'use client'

export default function BackToTop() {
  return (
    <a
      className="back-to-top"
      data-cursor="hover"
      href="#top"
      onClick={(e) => {
        e.preventDefault()
        const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        window.scrollTo({ top: 0, behavior: reduced ? 'auto' : 'smooth' })
      }}
    >
      ↑ Back to top
    </a>
  )
}
