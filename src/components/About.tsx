import { Reveal } from './Reveal'

const TOOLS = ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut']

export function About() {
  return (
    <section id="a-propos" className="bg-ink py-20 md:py-28">
      <div className="grid items-center gap-12 px-6 md:px-12 lg:grid-cols-[minmax(440px,560px)_minmax(0,1fr)] lg:gap-20 lg:px-24">
        <Reveal>
          <div className="relative mx-auto max-w-[560px] lg:mx-0">
            <div className="absolute -inset-3 rounded-[2rem] border border-accent/25 md:-inset-4" />
            <div className="relative aspect-[5/6] overflow-hidden rounded-[1.5rem] bg-ink-soft shadow-2xl shadow-black/45 ring-1 ring-white/10">
              <img
                src="/juste-portrait-hd.webp"
                alt="Portrait de Juste, monteur vidéo"
                loading="lazy"
                decoding="async"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-ink/75 to-transparent" />
              <p className="absolute bottom-5 left-5 rounded-full border border-white/20 bg-ink/55 px-4 py-2 font-mono text-[10px] tracking-[0.22em] text-white backdrop-blur-md md:bottom-7 md:left-7">
                JUSTE · MONTEUR VIDÉO
              </p>
            </div>
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
