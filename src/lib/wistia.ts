/**
 * Chargement paresseux du lecteur Wistia.
 *
 * Rien n'est téléchargé tant que le visiteur n'a pas cliqué sur une vidéo : la page
 * s'affiche avec les seuls posters. Au premier clic on injecte le runtime commun
 * (`player.js`), puis le script propre au média — c'est lui qui enregistre le custom
 * element `<wistia-player media-id="…">`.
 */

let runtimeInjected = false
const injectedMedia = new Set<string>()

function injectScript(src: string, asModule: boolean) {
  const el = document.createElement('script')
  el.src = src
  el.async = true
  if (asModule) el.type = 'module'
  document.head.appendChild(el)
}

export function loadWistia(mediaId: string) {
  if (!runtimeInjected) {
    runtimeInjected = true
    injectScript('https://fast.wistia.com/player.js', false)
  }
  if (!injectedMedia.has(mediaId)) {
    injectedMedia.add(mediaId)
    injectScript(`https://fast.wistia.com/embed/${mediaId}.js`, true)
  }
}
