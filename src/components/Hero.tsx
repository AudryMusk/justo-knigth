import { BookButton } from './BookButton'

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-ink">
      <img
        src="/hero.jpg"
        alt="Le studio de tournage : fond cyclo rose, softbox de part et d'autre"
        fetchPriority="high"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Voile vertical : lisibilité du texte au centre, fondu vers le noir en bas. */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink/80 via-ink/45 to-ink/95" />

      <div className="relative mx-auto flex min-h-[78svh] max-w-5xl flex-col items-center justify-center gap-7 px-6 py-24 text-center md:min-h-[86svh] md:py-32">
        <p className="font-mono text-[11px] tracking-[0.28em] text-white/75 md:text-sm">
          MONTEUR VIDÉO · VSL · PUBLICITÉS · YOUTUBE
        </p>

        <h1 className="font-display text-[clamp(2.5rem,8.5vw,5.75rem)] leading-[1.02] text-white">
          Personne ne scrolle vos vidéos
        </h1>

        <p className="max-w-xl text-lg leading-relaxed text-white/85 md:text-xl">
          Monteur vidéo professionnel. Je transforme vos rushes en formats qui retiennent
          l'attention jusqu'au bout, et qui convertissent.
        </p>

        <div className="mt-2 flex flex-wrap items-center justify-center gap-3">
          <a
            href="#travaux"
            className="rounded-full bg-accent px-8 py-4 text-base font-medium text-ink shadow-lg shadow-ink/40 transition hover:bg-white"
          >
            Voir le showreel
          </a>
          <BookButton className="rounded-full border border-white/30 px-8 py-4 text-base text-white backdrop-blur-sm transition hover:border-white/70 hover:bg-white/10">
            Démarrer un projet
          </BookButton>
        </div>
      </div>
    </section>
  )
}
