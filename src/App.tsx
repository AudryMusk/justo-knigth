import { useCallback, useState } from 'react'
import type { Video } from './data/videos'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Lightbox } from './components/Lightbox'
import { Method } from './components/Method'
import { Nav } from './components/Nav'
import { Stats } from './components/Stats'
import { Work } from './components/Work'

export default function App() {
  const [active, setActive] = useState<Video | null>(null)

  const open = useCallback((video: Video) => setActive(video), [])
  const close = useCallback(() => setActive(null), [])

  return (
    <>
      <a
        href="#travaux"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-full focus:bg-accent focus:px-5 focus:py-3 focus:text-ink"
      >
        Aller au contenu
      </a>

      <Nav />

      <main>
        <Hero />
        <Stats />
        <Work onOpen={open} />
        <Method />
        <About />
        <Contact />
      </main>

      <Footer />

      <Lightbox video={active} onClose={close} />
    </>
  )
}
