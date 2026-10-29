import type { Article } from './types';
import { business, editorPick, hero, latest, mustRead, sport } from './data';

export const allArticles: Article[] = [
  hero,
  ...latest,
  ...Object.values(mustRead),
  editorPick.main,
  ...editorPick.items,
  ...business,
  ...sport,
];

export const findArticle = (id: string): Article | undefined =>
  allArticles.find((a) => a.id === id);

/** Articles à lire ensuite : même rubrique d'abord. */
export function relatedTo(article: Article, count = 3): Article[] {
  const others = allArticles.filter((a) => a.id !== article.id);
  const same = others.filter((a) => a.category === article.category);
  const rest = others.filter((a) => a.category !== article.category);
  return [...same, ...rest].slice(0, count);
}