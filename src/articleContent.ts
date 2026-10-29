import type { Article } from './types';

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string };

/** Charge automatiquement tous les fichiers src/content/*.md (nom du fichier = id de l'article). */
const files = import.meta.glob('./content/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>;

function parseMarkdown(md: string): Block[] {
  return md
    .replace(/\r\n?/g, '\n') // normalise les fins de ligne Windows/Mac
    .trim()
    .split(/\n\s*\n/) // une ligne vide (même avec des espaces) sépare deux blocs
    .map<Block>((chunk) => {
      const t = chunk.trim();
      if (/^##\s*/.test(t)) return { type: 'h2', text: t.replace(/^##\s*/, '') };
      if (/^>\s*/.test(t)) return { type: 'quote', text: t.replace(/^>\s*/, '') };
      return { type: 'p', text: t.replace(/\s*\n\s*/g, ' ') };
    });
}

const fromFiles: Record<string, Block[]> = {};
for (const [path, md] of Object.entries(files)) {
  const id = path.split('/').pop()!.replace('.md', '');
  fromFiles[id] = parseMarkdown(md);
}

/** Texte de démonstration utilisé tant qu'un article n'a pas son fichier .md. */
function placeholder(article: Article): Block[] {
  return [
    { type: 'p', text: article.excerpt || article.title },
    {
      type: 'p',
      text: 'Ce texte est un contenu de démonstration. Ajoutez un fichier src/content/' + article.id + '.md pour afficher le vrai contenu de cet article.',
    },
  ];
}

export const getBody = (article: Article): Block[] =>
  fromFiles[article.id] ?? placeholder(article);