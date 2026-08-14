import { useState } from 'react'
import { Reveal } from './Reveal'

const TOOLS = ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut']

export function About() {
  // Le portrait de Juste n'est pas encore fourni : on garde un cadre propre en attendant.
  const [portraitMissing, setPortraitMissing] = useState(false)

  return (
    <section id="a-propos" className="bg-ink py-20 md:py-28">
      <div className="grid items-center gap-12 px-6 md:px-12 lg:grid-cols-[440px_1fr] lg:gap-20 lg:px-24">
        <Reveal>
          <div className="relative aspect-[5/6] overflow-hidden rounded-xl bg-ink-soft ring-1 ring-hairline">
            {portraitMissing ? (
              <div className="flex h-full flex-col items-center justify-center gap-2 px-6 text-center">
                <p className="font-mono text-xs tracking-widest text-muted">PORTRAIT</p>
                <p className="text-sm text-muted">
                  <code className="text-dim">public/juste.jpg - photo de juste ici</code>
                </p>
              </div>
            ) : (
              <img
                src="/juste.jpg"
                alt="Juste, monteur vidéo, à son poste de montage"
                loading="lazy"
                onError={() => setPortraitMissing(true)}
                className="h-full w-full object-cover"
              />
            )}
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="font-mono text-xs tracking-[0.28em] text-accent">03 / À PROPOS</p>
          <h2 className="mt-4 font-display text-[clamp(1.9rem,4.5vw,3rem)] leading-[1.06] text-white">
            Juste, monteur depuis sept ans
          </h2>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-dim">
            J'ai commencé en montant des vidéos pour des amis créateurs. Aujourd'hui je travaille
            avec des marques, des coachs et des chaînes YouTube qui vivent de leur audience.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-dim">
            Ce qui m'intéresse, ce n'est pas l'effet qui claque, c'est la seconde où le
            spectateur décide de rester. Tout mon montage tourne autour de ça.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2.5">
            {TOOLS.map((tool) => (
              <li
                key={tool}
                className="rounded-lg border border-hairline px-4 py-2.5 font-mono text-xs text-dim"
              >
                {tool}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
