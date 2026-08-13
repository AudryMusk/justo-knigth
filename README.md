# Portfolio de Juste — monteur vidéo

Landing page unique, une seule action visée : faire envoyer les rushes.

Implémentation de la maquette `pencil-new.pen` validée par le client.

## Démarrer

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # génère dist/
npm run preview  # sert le build de production
```

## Stack

React 19 + TypeScript + Vite 7, Tailwind CSS v4 (tokens déclarés dans `src/index.css`
via `@theme`, pas de fichier de config). Aucune dépendance d'animation ni de carrousel :
tout passe par IntersectionObserver et le scroll-snap natif.

## Structure

```
src/
  data/videos.ts     les 30 vidéos : media-id, poster, durée, libellés éditoriaux
  data/site.ts       e-mail, lien de rendez-vous, réseaux sociaux
  lib/wistia.ts      chargement paresseux du lecteur
  hooks/useReveal.ts révélation au scroll
  components/        une section par fichier + VideoCard / Carousel / Lightbox
scripts/
  fetch-wistia.mjs   contrôle posters et durées face à l'API Wistia
```

## Les vidéos

Les 30 vidéos sont hébergées sur Wistia ; leurs media-id viennent de
`Documentation/Liste des codes des vidéos du portfolio.docx`.

Posters et durées sont les **valeurs réelles** renvoyées par l'API oEmbed de Wistia,
figées dans `src/data/videos.ts` pour éviter 30 requêtes au chargement. Rien du lecteur
n'est téléchargé tant que le visiteur n'a pas cliqué : la page se charge avec les seuls
posters, puis `player.js` et le script du média arrivent au premier clic.

En revanche `title`, `client` et `category` sont **éditoriaux**. Les titres internes de
Wistia sont des noms de fichiers de travail (« Composition 1 2 », « ADS 4 Hook 3 »,
« 2026-03-07 11-00-02_1 ») et n'ont rien à faire sur un site public.

Pour ajouter une vidéo : ajouter l'entrée dans `VIDEOS`, puis récupérer poster et durée
avec

```bash
node scripts/fetch-wistia.mjs
```

Le script ne réécrit pas le fichier — il signale les écarts, à reporter à la main pour
ne pas écraser les libellés.

## À remplacer avant la mise en ligne

| Quoi | Où | État |
|---|---|---|
| Portrait de Juste | `public/juste.jpg` | **manquant** — un cadre de substitution s'affiche tant que le fichier n'est pas là |
| E-mail de contact | `src/data/site.ts` | `juste@exemple.com`, placeholder |
| Lien « Réserver un appel » | `src/data/site.ts` | pointe sur `#contact`, à remplacer par le Calendly / Cal.com |
| Comptes sociaux | `src/data/site.ts` | trois `#` |
| « 48h de délai », « 100% en remote » | `src/components/Stats.tsx` | à confirmer avec Juste |
| « monteur depuis sept ans », outils | `src/components/About.tsx` | biographie à valider |

Les deux autres chiffres du bandeau (30 réalisations, 9 clients) sont calculés à partir
de `VIDEOS` : ils restent justes automatiquement.

Le portrait se contente d'un `onError` : dès que `public/juste.jpg` existe, il s'affiche,
sans rien changer au code.

## Choix d'implémentation

**Le hero** utilise `public/hero.jpg` en local plutôt qu'une URL Unsplash — le site ne
dépend d'aucun CDN tiers pour son image principale.

**Les filtres sont réels** : cliquer sur « Publicité — 16 » remplace la sélection par une
grille des 16 vidéos concernées, avec une grille adaptée au format (5 colonnes pour les
verticales, 3 pour les horizontales). « Voir les 30 réalisations » déplie tout.

**Les carrousels débordent volontairement à droite** : la carte coupée est ce qui indique
qu'il y a une suite. Ils se pilotent à la molette, au doigt, aux deux boutons, et au
clavier via le focus des cartes.

**Accessibilité** : lien d'évitement, `aria-pressed` sur les filtres, `role="dialog"` et
piège de focus léger sur la lightbox (Échap et clic sur le fond ferment, le focus revient
sur la carte d'origine), anneaux de focus visibles, et tout le mouvement se désactive sous
`prefers-reduced-motion`.

**Contraste** : l'orange `#FF5C39` porte du texte noir (6,9:1) et non blanc (3:1, sous le
seuil). Sur fond blanc il descend à `#D9401C` (4,5:1) pour les petits textes — c'est le
rôle de la variable `--color-accent-ink`.
# justo-knigth
