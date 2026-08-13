import { type Video, formatDuration } from '../data/videos'

interface Props {
  video: Video
  onOpen: (video: Video) => void
  /** `large` = pièce mise en avant, `default` = carte de carrousel ou de grille. */
  size?: 'large' | 'default'
}

export function VideoCard({ video, onOpen, size = 'default' }: Props) {
  const vertical = video.format === '9:16'

  return (
    <button
      type="button"
      onClick={() => onOpen(video)}
      className="group block w-full text-left"
      aria-label={`Lire ${video.title}, ${video.client}, ${formatDuration(video.duration)}`}
    >
      <div
        className={`relative overflow-hidden rounded-xl bg-ink-soft ring-1 ring-hairline transition duration-500 group-hover:ring-white/25 ${
          vertical ? 'aspect-[9/16]' : 'aspect-video'
        }`}
      >
        <img
          src={video.thumb}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-[1.04]"
        />

        {/* Assombrit le poster pour que badges et bouton restent lisibles. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-ink/30 transition duration-500 group-hover:from-ink/70" />

        <span className="absolute left-3 top-3 rounded-md bg-ink/80 px-2.5 py-1.5 font-mono text-[10px] tracking-widest text-white backdrop-blur-sm">
          {video.category.toUpperCase()}
        </span>

        <span className="absolute bottom-3 right-3 rounded-md bg-ink/80 px-2 py-1 font-mono text-[11px] tabular-nums text-white backdrop-blur-sm">
          {formatDuration(video.duration)}
        </span>

        <span
          className={`absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-ink shadow-lg transition duration-300 group-hover:scale-110 group-hover:bg-accent ${
            size === 'large' ? 'h-16 w-16' : 'h-[52px] w-[52px]'
          }`}
        >
          <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="currentColor" aria-hidden="true">
            <path d="M8 5.14v13.72a1 1 0 0 0 1.54.84l10.79-6.86a1 1 0 0 0 0-1.68L9.54 4.3A1 1 0 0 0 8 5.14Z" />
          </svg>
        </span>
      </div>

      <h3
        className={`mt-3.5 font-display leading-tight text-white ${
          size === 'large' ? 'text-2xl md:text-[26px]' : 'text-lg md:text-xl'
        }`}
      >
        {video.title}
      </h3>
      <p className="mt-1.5 font-mono text-[11px] tracking-widest text-muted">
        {video.client.toUpperCase()} · {video.format}
      </p>
    </button>
  )
}
