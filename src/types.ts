export interface Article {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  source: string;
  time: string;
  category: string;
  readMin: number;
}

export interface Creator {
  id: string;
  name: string;
  desk: string;
  avatar: string;
}

export interface StorySlide {
  image: string;
  caption?: string; // texte affiché en bas de l'écran
  link?: string; // ex. '#a-l1' pour ouvrir un article
}

export interface Story {
  id: string;
  name: string;
  hue: number;
  slides: StorySlide[];
}

export interface FooterColumn {
  title: string;
  links: string[];
}
