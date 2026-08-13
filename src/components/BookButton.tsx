import type { ReactNode } from 'react'
import { CONTACT } from '../data/site'
import { openCalendly } from '../lib/calendly'

interface Props {
  children: ReactNode
  className?: string
}

/**
 * Le seul moyen de contact du site. Rendu comme un vrai lien vers Calendly — on
 * n'intercepte le clic que pour ouvrir la surcouche, et on laisse passer les clics
 * modifiés (nouvel onglet, nouvelle fenêtre).
 */
export function BookButton({ children, className = '' }: Props) {
  return (
    <a
      href={CONTACT.calendlyUrl}
      target="_blank"
      rel="noreferrer"
      className={className}
      onClick={async (event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return
        event.preventDefault()
        const opened = await openCalendly(CONTACT.calendlyUrl)
        if (!opened) window.open(CONTACT.calendlyUrl, '_blank', 'noopener,noreferrer')
      }}
    >
      {children}
    </a>
  )
}
