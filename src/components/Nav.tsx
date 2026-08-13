import { useEffect, useState } from 'react'
import { BookButton } from './BookButton'

const LINKS = [
  { href: '#travaux', label: 'Travaux' },
  { href: '#methode', label: 'Méthode' },
  { href: '#a-propos', label: 'À propos' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 bg-surface transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_1px_0_rgba(0,0,0,0.08),0_8px_24px_rgba(0,0,0,0.06)]' : ''
      }`}
    >
      <nav
        className="mx-auto flex items-center justify-between gap-6 px-6 py-4 md:px-12 lg:px-24"
        aria-label="Navigation principale"
      >
        <a href="#top" className="font-display text-xl tracking-[0.12em] text-ink md:text-2xl">
          JUSTE
        </a>

        <ul className="hidden items-center gap-9 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-base text-ink/80 transition hover:text-ink"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <BookButton className="rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-ink transition hover:bg-accent-ink hover:text-white md:text-base">
          Démarrer un projet
        </BookButton>
      </nav>
    </header>
  )
}
