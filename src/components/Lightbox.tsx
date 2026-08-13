import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'
import { type Video, formatDuration } from '../data/videos'
import { loadWistia } from '../lib/wistia'

/* `wistia-player` est un custom element : React le rend tel quel, TypeScript ne
   connaît pas ses attributs. */
const WistiaPlayer = 'wistia-player' as unknown as React.ElementType

interface Props {
  video: Video | null
  onClose: () => void
}

export function Lightbox({ video, onClose }: Props) {
  const closeRef = useRef<HTMLButtonElement>(null)
  const restoreFocusRef = useRef<HTMLElement | null>(null)

  useEffect(() => {
    if (!video) return
    loadWistia(video.id)
  }, [video])

  useEffect(() => {
    if (!video) return

    restoreFocusRef.current = document.activeElement as HTMLElement | null
    closeRef.current?.focus()

    const { overflow, paddingRight } = document.body.style
    // Compense la disparition de la scrollbar pour éviter un saut de mise en page.
    const gutter = window.innerWidth - document.documentElement.clientWidth
    document.body.style.overflow = 'hidden'
    if (gutter > 0) document.body.style.paddingRight = `${gutter}px`

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = overflow
      document.body.style.paddingRight = paddingRight
      restoreFocusRef.current?.focus()
    }
  }, [video, onClose])

  if (!video) return null

  const vertical = video.format === '9:16'

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/95 p-4 backdrop-blur-sm md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label={`${video.title}, ${video.client}`}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose()
      }}
    >
      <div className="flex w-full max-w-6xl flex-col items-center gap-5">
        <div className="flex w-full items-start justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl text-white md:text-3xl">{video.title}</h2>
            <p className="mt-1 font-mono text-[11px] tracking-widest text-muted">
              {video.client.toUpperCase()} · {video.format} · {formatDuration(video.duration)}
            </p>
          </div>

          <button
            ref={closeRef}
            type="button"
            onClick={onClose}
            aria-label="Fermer la vidéo"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-hairline text-white transition hover:border-white/40 hover:bg-white/5"
          >
            <svg
              viewBox="0 0 24 24"
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <div
          className={
            vertical
              ? 'aspect-[9/16] max-h-[72vh] overflow-hidden rounded-xl bg-black'
              : 'aspect-video w-full overflow-hidden rounded-xl bg-black'
          }
        >
          <WistiaPlayer
            key={video.id}
            media-id={video.id}
            aspect={vertical ? '0.5625' : '1.7777777777777777'}
            autoplay="true"
            style={{ display: 'block', width: '100%', height: '100%' }}
          />
        </div>
      </div>
    </div>,
    document.body,
  )
}
