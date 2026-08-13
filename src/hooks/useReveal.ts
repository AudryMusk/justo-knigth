import { useEffect, useRef } from 'react'

/**
 * Passe `data-visible="true"` sur l'élément la première fois qu'il entre dans le
 * viewport, puis cesse de l'observer. L'animation elle-même est en CSS et se
 * neutralise sous `prefers-reduced-motion`.
 */
export function useReveal<T extends HTMLElement = HTMLDivElement>() {
  const ref = useRef<T>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Sans IntersectionObserver, on affiche tout sans animation.
    if (typeof IntersectionObserver === 'undefined') {
      el.dataset.visible = 'true'
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            el.dataset.visible = 'true'
            observer.unobserve(el)
          }
        }
      },
      { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return ref
}
