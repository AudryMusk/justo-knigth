/**
 * Portfolio de Juste — 30 vidéos hébergées sur Wistia.
 *
 * Les media-id viennent de `Documentation/Liste des codes des vidéos du portfolio.docx`.
 * Les posters et les durées sont les valeurs réelles renvoyées par l'API oEmbed de
 * Wistia (`https://fast.wistia.com/oembed?url=...`), récupérées une fois et figées ici
 * pour éviter un aller-retour réseau au chargement de la page.
 *
 * Pour rafraîchir après un ajout de vidéo : `node scripts/fetch-wistia.mjs`
 *
 * `title` est un libellé éditorial choisi pour le site : les titres internes de Wistia
 * ("Composition 1 2", "ADS 4 Hook 3") sont des noms de fichiers de travail, pas des
 * titres publics.
 */

export type Category = 'VSL' | 'YouTube' | 'Publicité' | 'Short' | 'Intro'
export type Format = '16:9' | '9:16'

export interface Video {
  id: string
  format: Format
  category: Category
  title: string
  client: string
  /** Durée réelle, en secondes. */
  duration: number
  /** Poster Wistia. */
  thumb: string
}

export const VIDEOS: Video[] = [
  // ---------------------------------------------------------------- 16:9
  {
    id: '0ojfko9q7s',
    format: '16:9',
    category: 'VSL',
    title: 'VSL complète',
    client: 'Packo',
    duration: 234,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/ba79ef9569f0b85c4d2b91b0440daaac8a4e763a.jpg?image_crop_resized=1280x720',
  },
  {
    id: 'yavpt1q9sd',
    format: '16:9',
    category: 'VSL',
    title: 'VSL complète',
    client: 'Cyril Bossy',
    duration: 191,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/58362a8435c5064e15836f89eb76c3d909ea3eaf.jpg?image_crop_resized=1280x720',
  },
  {
    id: 'rpqciuew1v',
    format: '16:9',
    category: 'VSL',
    title: 'Vidéo downsell',
    client: 'Packo',
    duration: 77,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/a1ae957e33d7bf63f4e5448e2b5c70b1f5edd937.jpg?image_crop_resized=1280x720',
  },
  {
    id: 'wue8rcnwap',
    format: '16:9',
    category: 'YouTube',
    title: 'Closing 10 compétences',
    client: 'Marius',
    duration: 126,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/054b90d79160896e8449d50e8bd636acd644365b.jpg?image_crop_resized=1280x720',
  },
  {
    id: '6d9l9c6h3s',
    format: '16:9',
    category: 'YouTube',
    title: 'YouTube et publicité',
    client: 'Leadmia',
    duration: 115,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/df5060ff5fa985d75ada1a9e5becae90fadf237b.jpg?image_crop_resized=1280x720',
  },
  {
    id: 'fsbhdvpkg6',
    format: '16:9',
    category: 'Intro',
    title: 'Intro de chaîne',
    client: 'David Rupp',
    duration: 83,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/558c78e5d1bc9feb227c8f3444950c95ac960442.jpg?image_crop_resized=1280x691',
  },
  {
    id: 'w8hmcv8l4v',
    format: '16:9',
    category: 'Intro',
    title: 'Intro de chaîne',
    client: 'David Rupp',
    duration: 30,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/96ba24ad18163a1e048376740b48646ad2527d09.jpg?image_crop_resized=1280x720',
  },
  {
    id: 'yg3wmlq9vr',
    format: '16:9',
    category: 'Intro',
    title: 'Intro de chaîne',
    client: 'Créateur',
    duration: 27,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/93b4338b87846c635ba8ec3daf2f7dbdd4de226c.jpg?image_crop_resized=1280x720',
  },
  {
    id: '5aibxeas27',
    format: '16:9',
    category: 'YouTube',
    title: 'Séquence YouTube',
    client: 'David Rupp',
    duration: 44,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/fda02d97f40a580a2e7c17b7c72e1a88926778ce.jpg?image_crop_resized=1280x720',
  },
  {
    id: 'jctp6uxk0e',
    format: '16:9',
    category: 'YouTube',
    title: 'Séquence YouTube',
    client: 'David Rupp',
    duration: 20,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/dcb76af638febda335eba5db182627a1d590baab.jpg?image_crop_resized=1280x720',
  },

  // ---------------------------------------------------------------- 9:16
  {
    id: 'ix4bw5ld9a',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité hook 3',
    client: 'Cyril Bossy',
    duration: 39,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/7047f9eef817ce9325e4fa9ee46c837cb2fe302f.jpg?image_crop_resized=720x1280',
  },
  {
    id: '8t3gq028x2',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité hook 2',
    client: 'Cyril Bossy',
    duration: 37,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/45d1e9cadda608fab553e0f6cc7469d81375c749.jpg?image_crop_resized=720x1280',
  },
  {
    id: 'n9py4qfy28',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité hook 1',
    client: 'Cyril Bossy',
    duration: 36,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/676807270610e86a78687454f7c0ea5fc6cc2693.jpg?image_crop_resized=720x1280',
  },
  {
    id: '7f3ticwap5',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité hook 3',
    client: 'Cyril Bossy',
    duration: 36,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/ab1c11c4c26c02c08f4d8f5fd2145e829d674f6d.jpg?image_crop_resized=720x1280',
  },
  {
    id: 'ybsomwwuy6',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité hook 3',
    client: 'Cyril Bossy',
    duration: 38,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/2b4925ad797f402e063505fd2bcc9514aad4629c.jpg?image_crop_resized=720x1280',
  },
  {
    id: '6fxgnbfzrk',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité hook 2',
    client: 'Cyril Bossy',
    duration: 40,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/285d6ed3c11db3856dfc5ddc42333fefc76a61d4.jpg?image_crop_resized=720x1280',
  },
  {
    id: 'mgbj3vxokq',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité hook 1',
    client: 'Cyril Bossy',
    duration: 40,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/25975b13690662c55e36ae0099ee861c2143485a.jpg?image_crop_resized=720x1280',
  },
  {
    id: 'ssrkyi9yrp',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité hook 1',
    client: 'Cyril Bossy',
    duration: 36,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/468f044119a1a873fab4305f1b594a83c1b192fb.jpg?image_crop_resized=720x1280',
  },
  {
    id: 'mtbi52a8yk',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité',
    client: 'Jordan Dafflon',
    duration: 100,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/84a6866948c08fa9fb7018c253109f255e4bf391.jpg?image_crop_resized=720x1280',
  },
  {
    id: '1zg77plaqf',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité',
    client: 'Jordan Dafflon',
    duration: 60,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/3b049823c09adcfed911f3a108fb831b6f7b7c6b.jpg?image_crop_resized=720x1280',
  },
  {
    id: 'n8ocq1o9fi',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité',
    client: 'Jordan Dafflon',
    duration: 94,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/4f573f6968e60c5e6c4506e7f4928113d1a1bbd0.jpg?image_crop_resized=720x1280',
  },
  {
    id: 'yp8fi9xp0y',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité',
    client: 'Jordan Dafflon',
    duration: 97,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/8d02dc253ff705c7afe8eec87f3ca3f8706ba5f9.jpg?image_crop_resized=720x1280',
  },
  {
    id: 'pqhy8hymy1',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité',
    client: 'Jordan Dafflon',
    duration: 77,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/e04c6935f53d4180565ed160f005a63bdf2dbcb0.jpg?image_crop_resized=720x1280',
  },
  {
    id: '0wt2il5c9a',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité produit',
    client: 'Marque e-commerce',
    duration: 75,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/002d8a9c80d74bfd16e3ff11742e980e67eba608.jpg?image_crop_resized=720x1280',
  },
  {
    id: 'c3d77ox2q6',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité produit',
    client: 'Marque e-commerce',
    duration: 43,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/94aae40530c019bbb495e7a9a4166117b9610779.jpg?image_crop_resized=720x1280',
  },
  {
    id: 'y74tyoaorf',
    format: '9:16',
    category: 'Publicité',
    title: 'Publicité CTA',
    client: 'Finance',
    duration: 66,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/bce84f4b85e547f2fc2e9df464ee633c35793841.jpg?image_crop_resized=720x1280',
  },
  {
    id: 'lkxcyg7xmp',
    format: '9:16',
    category: 'Short',
    title: 'Short',
    client: 'Guillaume',
    duration: 85,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/3969afa1851ac0d5e45a7c34f689ca8ce96f1874.jpg?image_crop_resized=720x1280',
  },
  {
    id: '88lc6246pz',
    format: '9:16',
    category: 'Short',
    title: 'Short',
    client: 'Guillaume',
    duration: 110,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/e19bfe89434f0ef62df637e2f29947d65cf4decf.jpg?image_crop_resized=720x1280',
  },
  {
    id: '31s3541qnc',
    format: '9:16',
    category: 'Short',
    title: 'Short',
    client: 'Guillaume',
    duration: 81,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/c3a65dec912654db1240d63e25c954769dcb6d94.jpg?image_crop_resized=720x1280',
  },
  {
    id: 'dg4jcitpe1',
    format: '9:16',
    category: 'Short',
    title: 'Short coaching',
    client: 'Guillaume',
    duration: 87,
    thumb:
      'https://embed-ssl.wistia.com/deliveries/a53d1c860ebc0f81a9c8a243920cc4fb4ade4760.jpg?image_crop_resized=720x1278',
  },
]

/** Les deux pièces mises en avant en haut de la section Travaux. */
export const FEATURED_IDS = ['0ojfko9q7s', 'yavpt1q9sd']

export const CATEGORIES: Category[] = ['VSL', 'YouTube', 'Publicité', 'Short', 'Intro']

export function formatDuration(seconds: number): string {
  const m = Math.floor(seconds / 60)
  const s = seconds % 60
  return `${m}:${String(s).padStart(2, '0')}`
}

/** Nombre de clients distincts, hors entrées anonymisées. */
export const CLIENT_COUNT = new Set(
  VIDEOS.map((v) => v.client).filter((c) => c !== 'Créateur'),
).size
