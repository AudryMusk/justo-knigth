/**
 * Rafraîchit posters et durées depuis l'API oEmbed de Wistia.
 *
 *   node scripts/fetch-wistia.mjs
 *
 * Affiche un rapport et signale les écarts avec `src/data/videos.ts` (poster changé,
 * durée différente, média supprimé). Le fichier n'est pas réécrit automatiquement :
 * les libellés éditoriaux (`title`, `client`, `category`) sont choisis à la main et
 * ne doivent pas être écrasés par les noms de fichiers internes de Wistia.
 */
import { readFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const source = readFileSync(join(root, 'src/data/videos.ts'), 'utf8')

const entries = [...source.matchAll(/id: '([^']+)'[\s\S]*?duration: (\d+)/g)].map((m) => ({
  id: m[1],
  duration: Number(m[2]),
}))

console.log(`${entries.length} vidéos référencées\n`)

let issues = 0

for (const entry of entries) {
  const url = `https://fast.wistia.com/oembed?url=${encodeURIComponent(
    `https://home.wistia.com/medias/${entry.id}`,
  )}`

  try {
    const res = await fetch(url)
    if (!res.ok) {
      console.log(`✗ ${entry.id} — HTTP ${res.status} (média supprimé ou passé en privé ?)`)
      issues++
      continue
    }

    const data = await res.json()
    const duration = Math.round(data.duration)

    if (duration !== entry.duration) {
      console.log(`~ ${entry.id} — durée ${entry.duration}s → ${duration}s`)
      console.log(`    thumb: ${data.thumbnail_url}`)
      issues++
    } else {
      console.log(`✓ ${entry.id} — ${data.title}`)
    }
  } catch (error) {
    console.log(`✗ ${entry.id} — ${error.message}`)
    issues++
  }
}

console.log(issues === 0 ? '\nTout est à jour.' : `\n${issues} écart(s) à reporter à la main.`)
