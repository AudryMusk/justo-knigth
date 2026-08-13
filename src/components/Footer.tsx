import { SOCIALS } from '../data/site'

export function Footer() {
  return (
    <footer className="bg-ink">
      <div className="mx-auto flex flex-col items-center justify-between gap-6 px-6 py-10 md:flex-row md:px-12 lg:px-24">
        <a href="#top" className="font-display text-lg tracking-[0.12em] text-white">
          JUSTE
        </a>

        <ul className="flex flex-wrap items-center justify-center gap-7">
          {SOCIALS.map((social) => (
            <li key={social.label}>
              <a
                href={social.href}
                className="text-base text-muted transition hover:text-white"
                target="_blank"
                rel="noreferrer"
              >
                {social.label}
              </a>
            </li>
          ))}
        </ul>

        <p className="font-mono text-xs text-muted">© {new Date().getFullYear()} Juste</p>
      </div>
    </footer>
  )
}
