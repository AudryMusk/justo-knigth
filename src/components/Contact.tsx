import { BookButton } from './BookButton'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="bg-surface py-24 text-ink md:py-32">
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center gap-7 px-6 text-center">
        <p className="font-mono text-xs tracking-[0.28em] text-accent-ink">04 / ON COMMENCE ?</p>

        <h2 className="font-display text-[clamp(2.5rem,8vw,5rem)] leading-[1.03]">
          Envoyez vos rushes
        </h2>

        <p className="max-w-lg text-lg leading-relaxed text-ink/65">
          Vingt minutes au téléphone pour cadrer le projet, puis vous m'envoyez les rushes.
          Deux créneaux disponibles ce mois-ci.
        </p>

        {/* Une seule action possible sur toute la page : réserver le créneau. */}
        <BookButton className="mt-2 rounded-full bg-accent px-9 py-4.5 text-lg font-medium text-ink transition hover:bg-accent-ink hover:text-white">
          Réserver un appel
        </BookButton>

        <p className="font-mono text-xs tracking-widest text-ink/45">
          RÉPONSE SOUS 24H · DEVIS GRATUIT
        </p>
      </Reveal>
    </section>
  )
}
