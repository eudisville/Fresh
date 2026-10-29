# Fresh

Site web du média **Fresh** — React 18 + TypeScript + CSS pur (aucune librairie UI), bundlé avec Vite.

## Démarrer

```bash
npm install
npm run dev      # serveur de développement
npm run build    # vérification TypeScript + build de production (dossier dist/)
npm run preview  # prévisualiser le build
```

## Structure

```
src/
├── App.tsx               # composition de la page d'accueil
├── data.ts               # contenu de démonstration (à remplacer par votre API / CMS)
├── types.ts              # types Article, Creator, Story…
├── components/           # Header, Hero, ArticleCard, Stories, Newsletter, Footer…
└── styles/
    ├── global.css        # variables (couleurs, polices), reset, utilitaires
    └── components.css    # styles des composants + responsive
```

## Personnalisation rapide

- **Couleur de marque** : `--accent` dans `src/styles/global.css`.
- **Polices** : Inter (texte) et Playfair Display (titres), chargées dans `index.html`.
- **Contenu** : tout est dans `src/data.ts`. Les textes et images (picsum.photos) sont des placeholders.
- **Newsletter** : brancher votre service d'emailing dans `components/Newsletter.tsx` (voir le `TODO`).

## Fluidité

- Défilement doux, en-tête collant avec flou, apparition progressive des sections (IntersectionObserver).
- Images en chargement différé avec squelette et fondu.
- Animations désactivées automatiquement si l'utilisateur préfère un mouvement réduit.
- Mise en page adaptative : 4 colonnes → 2 → 1, menu burger sur mobile.
