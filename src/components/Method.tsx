import { Reveal } from './Reveal'

const STEPS = [
  {
    num: '01',
    title: 'Vous déposez',
    body: "Un lien Drive ou Frame.io avec vos rushes et une phrase sur l'objectif de la vidéo. C'est tout ce dont j'ai besoin pour commencer.",
  },
  {
    num: '02',
    title: 'Je monte',
    body: 'Dérushage, structure, rythme, sous-titres, sound design et étalonnage. Vous recevez une V1 commentable sous 48h.',
  },
  {
    num: '03',
    title: 'Vous publiez',
    body: 'Deux allers-retours inclus, puis les exports dans tous les formats dont vous avez besoin : 16:9, 9:16, 1:1.',
  },
]

export function Method() {
  return (
    <section id="methode" className="bg-surface py-20 text-ink md:py-28">
      <div className="px-6 md:px-12 lg:px-24">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="font-mono text-xs tracking-[0.28em] text-accent-ink">02 / MÉTHODE</p>
              <h2 className="mt-4 font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.05]">
                Vous envoyez les rushes, je m'occupe du reste
              </h2>
            </div>
            <p className="max-w-xl text-lg leading-relaxed text-ink/65 lg:pt-2">
              Pas de brief à rallonge, pas d'allers-retours interminables. Un lien de transfert,
              une deadline, et une vidéo prête à publier.
            </p>
          </div>
        </Reveal>

        <ol className="mt-16 grid gap-10 md:grid-cols-3 md:gap-0">
          {STEPS.map((step, i) => (
            <Reveal
              as="li"
              key={step.num}
              delay={i * 120}
              className={`md:px-10 ${i === 0 ? 'md:pl-0' : 'md:border-l md:border-hairline-light'}`}
            >
              <p className="font-mono text-xs tracking-[0.2em] text-accent-ink">{step.num}</p>
              <h3 className="mt-3.5 font-display text-2xl leading-snug md:text-[28px]">
                {step.title}
              </h3>
              <p className="mt-3.5 leading-relaxed text-ink/65">{step.body}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
