import { type ReactNode, useCallback, useEffect, useRef, useState } from 'react'

interface Props {
  children: ReactNode
  label: string
}

/**
 * Piste horizontale aimantée. Elle déborde volontairement à droite : la carte coupée
 * indique qu'il y a une suite. Navigation à la molette, au doigt, aux flèches du
 * clavier (via le focus des cartes) ou aux deux boutons.
 */
export function Carousel({ children, label }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const sync = useCallback(() => {
    const el = trackRef.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setAtStart(el.scrollLeft <= 8)
    setAtEnd(el.scrollLeft >= max - 8)
  }, [])

  useEffect(() => {
    sync()
    const el = trackRef.current
    if (!el) return
    window.addEventListener('resize', sync)
    return () => window.removeEventListener('resize', sync)
  }, [sync])

  const scrollBy = (direction: 1 | -1) => {
    const el = trackRef.current
    if (!el) return
    el.scrollBy({ left: direction * el.clientWidth * 0.8, behavior: 'smooth' })
  }

  return (
    <div className="relative">
      <div
        ref={trackRef}
        onScroll={sync}
        /* scroll-pl doit refléter pl : sans lui, le snap aligne la première carte sur
           le bord et avale le retrait de gauche. */
        className="track flex gap-6 overflow-x-auto pb-2 pl-6 scroll-pl-6 md:pl-12 md:scroll-pl-12 lg:pl-24 lg:scroll-pl-24"
        role="region"
        aria-label={label}
        tabIndex={0}
      >
        {children}
        {/* Marge de fin, pour que la dernière carte ne colle pas au bord. */}
        <div aria-hidden="true" className="w-6 shrink-0 md:w-12 lg:w-24" />
      </div>

      <div className="mt-5 flex gap-2.5 px-6 md:px-12 lg:px-24">
        <CarouselButton
          direction="left"
          disabled={atStart}
          onClick={() => scrollBy(-1)}
          label={`Faire défiler ${label} vers la gauche`}
        />
        <CarouselButton
          direction="right"
          disabled={atEnd}
          onClick={() => scrollBy(1)}
          label={`Faire défiler ${label} vers la droite`}
        />
      </div>
    </div>
  )
}

function CarouselButton({
  direction,
  disabled,
  onClick,
  label,
}: {
  direction: 'left' | 'right'
  disabled: boolean
  onClick: () => void
  label: string
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-hairline text-white transition hover:border-white/40 hover:bg-white/5 disabled:pointer-events-none disabled:opacity-30"
    >
      <svg
        viewBox="0 0 24 24"
        className={`h-4 w-4 ${direction === 'left' ? 'rotate-180' : ''}`}
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h14M13 6l6 6-6 6" />
      </svg>
    </button>
  )
}
