import { CLIENT_COUNT, VIDEOS } from '../data/videos'
import { Reveal } from './Reveal'

const STATS: { value: string; label: string }[] = [
  { value: String(VIDEOS.length), label: 'réalisations' },
  { value: String(CLIENT_COUNT), label: 'clients accompagnés' },
  { value: '48h', label: 'délai de livraison' },
  { value: '100%', label: 'en remote' },
]

export function Stats() {
  return (
    <section className="border-b border-hairline bg-ink" aria-label="Chiffres clés">
      <div className="mx-auto grid grid-cols-2 gap-x-6 gap-y-9 px-6 py-12 md:grid-cols-4 md:px-12 lg:px-24">
        {STATS.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 80}>
            <p className="font-display text-4xl text-white md:text-[42px]">{stat.value}</p>
            <p className="mt-1.5 font-mono text-xs tracking-widest text-muted">{stat.label}</p>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
