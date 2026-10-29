import type { Article, Creator, FooterColumn, Story } from './types';

/** Images de démonstration (remplacez par vos propres visuels). */
const img = (seed: string, w = 640, h = 480) =>
  `https://picsum.photos/seed/fresh-${seed}/${w}/${h}`;

export const hero: Article = {
  id: 'a-hero',
  title: 'Où regarder la nouvelle saison de la série africaine la plus attendue',
  excerpt:
    "Aucune date officielle n'a encore été annoncée, mais la plateforme de diffusion confirme que les nouveaux épisodes arriveront très bientôt, après une longue attente des fans du continent et de la diaspora.",
  image: 'https://madridxtra.com/_next/image?url=https%3A%2F%2Fmedia.madridxtra.com%2Fyan_diomande_rayo_hero-1600x900.jpg%3Fv%3Dmu0akfny&w=3840&q=75',
  source: 'Fresh Culture',
  time: 'il y a 12 minutes',
  category: 'Cinéma',
  readMin: 4,
};

export const latest: Article[] = [
  {
    id: 'a-l1',
    title: 'Football : les Éléphants s’imposent dans les dernières minutes',
    excerpt:
      'Un but tardif offre aux Ivoiriens une victoire précieuse dans la course à la qualification, au terme d’un match très disputé.',
    image: img('l1'),
    source: 'Fresh Sport',
    time: 'il y a 3 h',
    category: 'Sport',
    readMin: 8,
  },
  {
    id: 'a-l2',
    title: 'Abidjan : le nouveau pont suscite l’enthousiasme des riverains',
    excerpt:
      'Mis en service ce mois-ci, l’ouvrage promet de désengorger plusieurs axes majeurs et de raccourcir sensiblement les trajets quotidiens.',
    image: img('l2'),
    source: 'Fresh Société',
    time: 'il y a 5 h',
    category: 'Société',
    readMin: 6,
  },
  {
    id: 'a-l3',
    title: 'Climat : les agriculteurs misent sur des cultures plus résilientes',
    excerpt:
      'Face aux aléas météorologiques, de plus en plus de producteurs adoptent de nouvelles variétés et des techniques d’irrigation plus sobres.',
    image: img('l3'),
    source: 'Fresh Planète',
    time: 'il y a 8 h',
    category: 'Environnement',
    readMin: 8,
  },
  {
    id: 'a-l4',
    title: 'Diplomatie : un sommet régional sous le signe de la coopération',
    excerpt:
      'Les chefs de délégation se sont retrouvés pour discuter de sécurité, de commerce et de mobilité, avec l’espoir de décisions concrètes.',
    image: img('l4'),
    source: 'Fresh Monde',
    time: 'il y a 9 h',
    category: 'Afrique',
    readMin: 8,
  },
];

export const mustRead = {
  left: {
    id: 'a-m1',
    title: 'Énergie : comment le solaire change le quotidien des villages',
    excerpt:
      'Des kilomètres de pistes sans réseau, et pourtant les lumières s’allument : reportage au cœur des communautés qui se raccordent au soleil.',
    image: img('m1'),
    source: 'Fresh Planète',
    time: 'il y a 10 h',
    category: 'Environnement',
    readMin: 8,
  } satisfies Article,
  center: {
    id: 'a-m2',
    title: 'Afrobeats : une nouvelle génération d’artistes conquiert la scène mondiale',
    excerpt:
      'Salles combles, collaborations internationales et tournées sold-out : enquête sur le phénomène qui redéfinit la musique populaire.',
    image: img('m2', 800, 1000),
    source: 'Fresh Culture',
    time: 'il y a 5 h',
    category: 'Divertissement',
    readMin: 10,
  } satisfies Article,
  topRight: {
    id: 'a-m3',
    title: 'Dakar, Abidjan, Lagos : les villes africaines du futur',
    excerpt: '',
    image: img('m3'),
    source: 'Fresh Voyage',
    time: 'il y a 20 h',
    category: 'Voyage',
    readMin: 4,
  } satisfies Article,
  bottomRight: {
    id: 'a-m4',
    title: 'Championnat : un promu s’offre la tête du classement',
    excerpt: '',
    image: img('m4'),
    source: 'Fresh Sport',
    time: 'il y a 22 h',
    category: 'Sport',
    readMin: 6,
  } satisfies Article,
};

export const editorPick: { main: Article; items: Article[] } = {
  main: {
    id: 'a-e0',
    title: 'Smartphones : ce que l’on sait des prochains modèles attendus en 2027',
    excerpt:
      'Écrans plus lumineux, intelligence artificielle embarquée, autonomie record : tour d’horizon des rumeurs et des annonces à surveiller.',
    image: img('e0', 1400, 600),
    source: 'Fresh Tech',
    time: 'il y a 5 h',
    category: 'Technologie',
    readMin: 10,
  },
  items: [
    {
      id: 'a-e1',
      title: 'Zanzibar : l’île aux mille saveurs s’ouvre au tourisme digital',
      excerpt:
        'Entre plages, épices et ruelles historiques, la destination séduit une nouvelle clientèle grâce à ses offres connectées.',
      image: img('e1'),
      source: 'Fresh Voyage',
      time: 'il y a 10 h',
      category: 'Voyage',
      readMin: 8,
    },
    {
      id: 'a-e2',
      title: 'IA générative : comment elle transforme le recrutement',
      excerpt:
        'Tri des candidatures, entretiens simulés, rédaction d’annonces : les recruteurs adoptent l’IA, avec ses promesses et ses limites.',
      image: img('e2'),
      source: 'Fresh Tech',
      time: 'il y a 11 h',
      category: 'Travail',
      readMin: 18,
    },
    {
      id: 'a-e3',
      title: 'Streaming : les plateformes africaines à l’assaut des séries locales',
      excerpt:
        'Productions originales, abonnements mobiles et partenariats télécoms : le modèle se construit pas à pas.',
      image: img('e3'),
      source: 'Fresh Tech',
      time: 'il y a 12 h',
      category: 'Technologie',
      readMin: 9,
    },
    {
      id: 'a-e4',
      title: 'Manuscrits anciens : une exposition rare attire les passionnés',
      excerpt:
        'Des pièces d’archives rarement présentées au public sont exposées pour la première fois, dans une scénographie immersive.',
      image: img('e4'),
      source: 'Fresh Culture',
      time: 'il y a 13 h',
      category: 'Culture',
      readMin: 6,
    },
  ],
};

export const business: Article[] = [
  {
    id: 'a-b1',
    title: 'Cacao : les producteurs investissent dans la transformation locale',
    excerpt: '',
    image: img('b1'),
    source: 'Fresh Éco',
    time: 'il y a 9 h',
    category: 'Économie',
    readMin: 6,
  },
  {
    id: 'a-b2',
    title: 'Management : comment relancer l’engagement des équipes',
    excerpt: '',
    image: img('b2'),
    source: 'Fresh Éco',
    time: 'il y a 17 h',
    category: 'Économie',
    readMin: 12,
  },
];

export const sport: Article[] = [
  {
    id: 'a-s1',
    title: 'Mercato : le club recherche activement un nouvel attaquant',
    excerpt: '',
    image: img('s1'),
    source: 'Fresh Sport',
    time: 'il y a 3 h',
    category: 'Sport',
    readMin: 10,
  },
  {
    id: 'a-s2',
    title: 'Tennis : une jeune joueuse repart de zéro avec un nouveau coach',
    excerpt: '',
    image: img('s2'),
    source: 'Fresh Sport',
    time: 'il y a 12 h',
    category: 'Sport',
    readMin: 8,
  },
];

export const creators: Creator[] = [
  { id: 'c1', name: 'Awa Koné', desk: 'Fresh Culture', avatar: img('c1', 120, 120) },
  { id: 'c2', name: 'Yao Brou', desk: 'Fresh Sport', avatar: img('c2', 120, 120) },
  { id: 'c3', name: 'Salimata Diop', desk: 'Fresh Éco', avatar: img('c3', 120, 120) },
  { id: 'c4', name: 'Kevin Mensah', desk: 'Fresh Tech', avatar: img('c4', 120, 120) },
];

const storySlides = (seed: string, items: { caption: string; link?: string }[]) =>
  items.map((item, i) => ({
    image: img(`${seed}-${i}`, 720, 1280),
    caption: item.caption,
    link: item.link,
  }));

export const stories: Story[] = [
  {
    id: 's1', name: 'Fresh Sport', hue: 8,
    slides: storySlides('s1', [
      { caption: 'Les Éléphants s’imposent dans les dernières minutes', link: '#a-l1' },
      { caption: 'Championnat : un promu en tête du classement', link: '#a-m4' },
    ]),
  },
  {
    id: 's2', name: 'Fresh Éco', hue: 150,
    slides: storySlides('s2', [
      { caption: 'Cacao : la transformation locale prend de l’ampleur', link: '#a-b1' },
    ]),
  },
  {
    id: 's3', name: 'Culture', hue: 280,
    slides: storySlides('s3', [
      { caption: 'Afrobeats : la nouvelle génération conquiert le monde', link: '#a-m2' },
      { caption: 'Une exposition rare de manuscrits anciens', link: '#a-e4' },
    ]),
  },
  {
    id: 's4', name: 'Tech', hue: 215,
    slides: storySlides('s4', [
      { caption: 'Smartphones 2027 : ce qui est attendu', link: '#a-e0' },
      { caption: 'IA et recrutement : ce qui change', link: '#a-e2' },
    ]),
  },
  {
    id: 's5', name: 'Afrique', hue: 35,
    slides: storySlides('s5', [{ caption: 'Un sommet régional sous le signe de la coopération', link: '#a-l4' }]),
  },
  {
    id: 's6', name: 'Cinéma', hue: 340,
    slides: storySlides('s6', [{ caption: 'Où regarder la nouvelle saison', link: '#a-hero' }]),
  },
  {
    id: 's7', name: 'Musique', hue: 260,
    slides: storySlides('s7', [{ caption: 'Les artistes à suivre cette saison' }]),
  },
  {
    id: 's8', name: 'Mode', hue: 320,
    slides: storySlides('s8', [{ caption: 'Les tendances du moment' }]),
  },
  {
    id: 's9', name: 'Santé', hue: 175,
    slides: storySlides('s9', [{ caption: 'Les bons réflexes de la semaine' }]),
  },
  {
    id: 's10', name: 'Auto', hue: 20,
    slides: storySlides('s10', [{ caption: 'Les nouveautés de l’automobile' }]),
  },
];

export const footerColumns: FooterColumn[] = [
  { title: 'Économie', links: ['Start-up', 'Emploi', 'Réussite', 'Vidéos', 'Marchés'] },
  { title: 'Technologie', links: ['Innovation', 'Gadgets', 'Villes innovantes', 'Jeunes pousses', 'Tech du futur'] },
  { title: 'Voyage', links: ['Destinations', 'Gastronomie', 'Séjours', 'Actualités', 'Vidéos'] },
  { title: 'Sports', links: ['Football', 'Tennis', 'Golf', 'Sports mécaniques', 'E-sport'] },
  { title: 'Divertissement', links: ['Cinéma', 'Artistes', 'Télévision', 'Influenceurs', 'Viral'] },
  { title: 'Dossiers', links: ['À égalité', 'Cap sur la Terre', 'Projet Liberté', 'Regard sur l’Asie', 'Deux degrés'] },
  { title: 'Météo', links: ['Climat', 'Suivi des tempêtes', 'Feux de forêt', 'Séismes', 'Vidéos'] },
  { title: 'Plus', links: ['Design', 'Mentorat', 'Investissement', 'Travailler chez Fresh', 'Nous contacter'] },
];
