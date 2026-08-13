import { useMemo, useState } from 'react'
import { CATEGORIES, type Category, FEATURED_IDS, type Video, VIDEOS } from '../data/videos'
import { Carousel } from './Carousel'
import { Reveal } from './Reveal'
import { VideoCard } from './VideoCard'

type Filter = 'Tout' | Category

interface Props {
  onOpen: (video: Video) => void
}

export function Work({ onOpen }: Props) {
  const [filter, setFilter] = useState<Filter>('Tout')
  const [expanded, setExpanded] = useState(false)

  const counts = useMemo(() => {
    const map = new Map<Category, number>()
    for (const v of VIDEOS) map.set(v.category, (map.get(v.category) ?? 0) + 1)
    return map
  }, [])

  const featured = useMemo(
    () => FEATURED_IDS.map((id) => VIDEOS.find((v) => v.id === id)!).filter(Boolean),
    [],
  )
  const horizontal = useMemo(
    () => VIDEOS.filter((v) => v.format === '16:9' && !FEATURED_IDS.includes(v.id)),
    [],
  )
  const vertical = useMemo(() => VIDEOS.filter((v) => v.format === '9:16'), [])

  const filtered = useMemo(
    () => (filter === 'Tout' ? VIDEOS : VIDEOS.filter((v) => v.category === filter)),
    [filter],
  )

  // Vue « sélection » (carrousels) uniquement sans filtre et sans dépliage.
  const showcase = filter === 'Tout' && !expanded
  const allVertical = filtered.every((v) => v.format === '9:16')

  const selectFilter = (next: Filter) => {
    setFilter(next)
    setExpanded(false)
  }

  return (
    <section id="travaux" className="bg-ink py-20 md:py-28">
      <div className="px-6 md:px-12 lg:px-24">
        <Reveal>
          <p className="font-mono text-xs tracking-[0.28em] text-accent">01 / RÉALISATIONS</p>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,5.5vw,3.5rem)] leading-[1.05] text-white">
            Trente montages, deux formats
          </h2>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-dim">
            VSL, publicités et formats YouTube montés pour des créateurs et des marques qui
            vendent avec la vidéo.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-8 flex flex-wrap gap-2.5" role="group" aria-label="Filtrer par type">
            <FilterChip
              label={`Tout (${VIDEOS.length})`}
              active={filter === 'Tout'}
              onClick={() => selectFilter('Tout')}
            />
            {CATEGORIES.map((c) => (
              <FilterChip
                key={c}
                label={`${c} (${counts.get(c) ?? 0})`}
                active={filter === c}
                onClick={() => selectFilter(c)}
              />
            ))}
          </div>
        </Reveal>
      </div>

      {showcase ? (
        <>
          <div className="mt-14 grid gap-8 px-6 md:grid-cols-2 md:px-12 lg:px-24">
            {featured.map((video, i) => (
              <Reveal key={video.id} delay={i * 120}>
                <VideoCard video={video} onOpen={onOpen} size="large" />
              </Reveal>
            ))}
          </div>

          <div className="mt-20">
            <TrackLabel format="FORMAT 16:9" note="10 vidéos : VSL, YouTube, intros" />
            <Carousel label="Vidéos au format 16:9">
              {horizontal.map((video) => (
                <div key={video.id} className="w-[300px] shrink-0 sm:w-[360px] lg:w-[420px]">
                  <VideoCard video={video} onOpen={onOpen} />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="mt-16">
            <TrackLabel format="FORMAT 9:16" note="20 vidéos : publicités et shorts" />
            <Carousel label="Vidéos au format 9:16">
              {vertical.map((video) => (
                <div key={video.id} className="w-[168px] shrink-0 sm:w-[200px] lg:w-[230px]">
                  <VideoCard video={video} onOpen={onOpen} />
                </div>
              ))}
            </Carousel>
          </div>
        </>
      ) : (
        <div
          className={`mt-14 grid gap-x-6 gap-y-10 px-6 md:px-12 lg:px-24 ${
            allVertical
              ? 'grid-cols-2 md:grid-cols-4 lg:grid-cols-5'
              : 'sm:grid-cols-2 lg:grid-cols-3'
          }`}
        >
          {filtered.map((video, i) => (
            <Reveal key={video.id} delay={Math.min(i, 8) * 60}>
              <VideoCard video={video} onOpen={onOpen} />
            </Reveal>
          ))}
        </div>
      )}

      <div className="mt-16 flex flex-col items-start justify-between gap-5 px-6 md:flex-row md:items-center md:px-12 lg:px-24">
        <p className="text-base text-dim">
          {filter === 'Tout'
            ? `${VIDEOS.length} réalisations au total : ${horizontal.length + featured.length} en 16:9, ${vertical.length} en 9:16`
            : `${filtered.length} ${filtered.length > 1 ? 'vidéos' : 'vidéo'} dans « ${filter} »`}
        </p>

        {filter === 'Tout' && (
          <button
            type="button"
            onClick={() => setExpanded((v) => !v)}
            className="group inline-flex items-center gap-2.5 rounded-full border border-hairline px-7 py-3.5 text-base text-white transition hover:border-white/40 hover:bg-white/5"
          >
            {expanded ? 'Revenir à la sélection' : `Voir les ${VIDEOS.length} réalisations`}
            <svg
              viewBox="0 0 24 24"
              className={`h-4 w-4 transition-transform ${expanded ? 'rotate-180' : 'group-hover:translate-x-1'}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              {expanded ? <path d="M18 15l-6-6-6 6" /> : <path d="M5 12h14M13 6l6 6-6 6" />}
            </svg>
          </button>
        )}
      </div>
    </section>
  )
}

function TrackLabel({ format, note }: { format: string; note: string }) {
  return (
    <div className="mb-6 flex flex-wrap items-baseline gap-x-4 gap-y-1 px-6 md:px-12 lg:px-24">
      <p className="font-mono text-xs tracking-[0.28em] text-accent">{format}</p>
      <p className="font-mono text-xs tracking-widest text-muted">{note}</p>
    </div>
  )
}

function FilterChip({
  label,
  active,
  onClick,
}: {
  label: string
  active: boolean
  onClick: () => void
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`rounded-full px-5 py-2.5 font-mono text-xs tracking-widest transition ${
        active
          ? 'bg-white text-ink'
          : 'border border-hairline text-dim hover:border-white/35 hover:text-white'
      }`}
    >
      {label}
    </button>
  )
}
