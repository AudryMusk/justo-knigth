/**
 * Ouverture de Calendly en surcouche, sans quitter la page.
 *
 * Le widget n'est téléchargé qu'au premier clic. Les boutons restent de vrais liens :
 * si le script est bloqué (adblock, réseau, JS coupé), le clic suit le lien vers
 * Calendly au lieu de ne rien faire.
 */

const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css'
const WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js'

interface CalendlyGlobal {
  Calendly?: { initPopupWidget(options: { url: string }): void }
}

let loader: Promise<void> | null = null

function loadWidget(): Promise<void> {
  if (loader) return loader

  loader = new Promise<void>((resolve, reject) => {
    const css = document.createElement('link')
    css.rel = 'stylesheet'
    css.href = WIDGET_CSS
    document.head.appendChild(css)

    const script = document.createElement('script')
    script.src = WIDGET_JS
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('widget Calendly indisponible'))
    document.head.appendChild(script)
  })

  return loader
}

/** Renvoie `false` si la surcouche n'a pas pu s'ouvrir — à l'appelant de suivre le lien. */
export async function openCalendly(url: string): Promise<boolean> {
  try {
    await loadWidget()
    const { Calendly } = window as unknown as CalendlyGlobal
    if (!Calendly) return false
    Calendly.initPopupWidget({ url })
    return true
  } catch {
    return false
  }
}
