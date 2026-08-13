import type { ReactNode } from 'react'
import { useReveal } from '../hooks/useReveal'

interface Props {
  children: ReactNode
  className?: string
  /** Décalage en ms, pour faire arriver une série d'éléments en cascade. */
  delay?: number
  as?: 'div' | 'section' | 'li'
}

export function Reveal({ children, className = '', delay = 0, as = 'div' }: Props) {
  const ref = useReveal<HTMLDivElement>()
  // La balise rendue reste celle passée en prop ; le cast sert uniquement à donner à
  // JSX un jeu de props unique au lieu de l'intersection div | section | li.
  const Tag = as as 'div'

  return (
    <Tag
      ref={ref}
      className={`reveal ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  )
}
