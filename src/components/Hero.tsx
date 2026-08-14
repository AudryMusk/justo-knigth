import { useEffect, useState } from 'react'
import { VIDEOS } from '../data/videos'
import { BookButton } from './BookButton'

const ROTATION_DELAY = 4200

const portfolioSlides = ['0ojfko9q7s', 'wue8rcnwap', '6d9l9c6h3s', 'fsbhdvpkg6']
  .map((id) => VIDEOS.find((video) => video.id === id))
  .filter((video) => video !== undefined)
  .map((video) => ({
    image: video.thumb,
    category: video.category,
    title: video.title,
    client: video.client,
  }))

const SLIDES = [
  {
    image: '/hero.jpg',
    category: 'Studio',
    title: 'Direction créative',
    client: 'Juste',
  },
  ...portfolioSlides,
]

export function Hero() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const timer = window.setInterval(
      () => setActive((current) => (current + 1) % SLIDES.length),
      ROTATION_DELAY,
    )

    return () => window.clearInterval(timer)
  }, [active, paused])

  // Précharge le plan suivant pour que le fondu reste fluide, même sur une connexion moyenne.
  useEffect(() => {
    const next = new Image()
    next.src = SLIDES[(active + 1) % SLIDES.length].image
  }, [active])

  const slide = SLIDES[active]

  return (
    <section
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden bg-ink"
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setPaused(false)
      }}
    >
      <div className="absolute inset-0" aria-hidden="true">
        {SLIDES.map((item, index) => (
          <img
            key={item.image}
            src={item.image}
            alt=""
            fetchPriority={index === 0 ? 'high' : 'auto'}
            decoding="async"
            className="hero-slide absolute inset-0 h-full w-full object-cover"
            data-active={index === active}
          />
        ))}
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,5,0.94)_0%,rgba(5,5,5,0.69)_42%,rgba(5,5,5,0.12)_75%),linear-gradient(0deg,rgba(5,5,5,0.9)_0%,transparent_45%,rgba(5,5,5,0.38)_100%)]" />
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.12)_1px,transparent_1px)] [background-size:25vw_100%,25vw_100%]" />

      <div className="relative mx-auto flex min-h-[100svh] flex-col justify-end px-6 pb-8 pt-32 md:px-12 md:pb-12 lg:px-24">
        <div className="mb-auto mt-auto max-w-5xl py-16 md:py-24">
          <div className="mb-6 flex items-center gap-3 font-mono text-[10px] tracking-[0.3em] text-white/70 md:text-xs">
            <span className="h-px w-10 bg-accent" />
            MONTAGE HAUTE RÉTENTION · VSL · ADS · YOUTUBE
          </div>

          <h1 className="max-w-5xl font-display text-[clamp(3.65rem,10.5vw,9.5rem)] uppercase leading-[0.83] tracking-[-0.025em] text-white">
            L'attention
            <span className="block text-accent">se monte.</span>
          </h1>

          <div className="mt-8 flex max-w-3xl flex-col gap-7 border-l border-white/25 pl-5 md:mt-10 md:flex-row md:items-end md:justify-between md:gap-12 md:pl-7">
            <p className="max-w-xl text-base leading-relaxed text-white/78 md:text-lg">
              Des vidéos rythmées, précises et mémorables — conçues pour retenir le regard
              et transformer chaque seconde en résultat.
            </p>

            <div className="flex shrink-0 flex-wrap gap-3">
              <a
                href="#travaux"
                className="rounded-full bg-accent px-6 py-3.5 text-sm font-medium text-ink transition hover:bg-white md:px-7"
              >
                Voir les projets
              </a>
              <BookButton className="rounded-full border border-white/30 px-6 py-3.5 text-sm text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/10 md:px-7">
                Travaillons ensemble
              </BookButton>
            </div>
          </div>
        </div>

        <div className="grid gap-5 border-t border-white/20 pt-5 md:grid-cols-[1fr_auto] md:items-end">
          <div className="min-h-12" aria-live="off">
            <p className="font-mono text-[10px] tracking-[0.25em] text-accent">
              {String(active + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
            </p>
            <p className="mt-1 text-sm text-white md:text-base">
              {slide.title} <span className="text-white/45">— {slide.client} · {slide.category}</span>
            </p>
          </div>

          <div className="flex gap-2" role="group" aria-label="Choisir un visuel du hero">
            {SLIDES.map((item, index) => (
              <button
                key={`${item.image}-control`}
                type="button"
                onClick={() => setActive(index)}
                className="group relative h-8 w-10 overflow-hidden md:w-14"
                aria-label={`Afficher le visuel ${index + 1} : ${item.title}`}
                aria-current={index === active ? 'true' : undefined}
              >
                <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-white/30" />
                {index === active && (
                  <span
                    key={active}
                    className="hero-progress absolute left-0 top-1/2 h-px -translate-y-1/2 bg-white"
                    style={{
                      animationDuration: `${ROTATION_DELAY}ms`,
                      animationPlayState: paused ? 'paused' : 'running',
                    }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </div>

      <p className="absolute right-6 top-1/2 hidden -translate-y-1/2 rotate-90 font-mono text-[10px] tracking-[0.32em] text-white/45 xl:block">
        FILMS · ADS · VSL · YOUTUBE
      </p>
    </section>
  )
}
