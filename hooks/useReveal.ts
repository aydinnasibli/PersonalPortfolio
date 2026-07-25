'use client'

import { useEffect } from 'react'

/**
 * Adds `.in` to `.rv` / `.mask-line` elements as they enter the viewport.
 *
 * The hidden state is the CSS default, so anything that stops this from
 * running would hide the page — hence the `no-js` escape hatch in layout.tsx
 * and the reduced-motion override in globals.css.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<Element>('.rv, .mask-line')

    // Reduced motion already shows everything via CSS; no observer needed.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    if (!('IntersectionObserver' in window)) {
      els.forEach((el) => el.classList.add('in'))
      return
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in')
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [])
}
