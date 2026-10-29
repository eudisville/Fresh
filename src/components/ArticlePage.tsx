import { useEffect, useState } from 'react';
import type { Article } from '../types';
import { getBody } from '../articleContent';
import { relatedTo } from '../articles';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollTop } from './ScrollTop';
import { LazyImage } from './LazyImage';
import { ArticleCard, SourceMeta } from './ArticleCard';
import { SectionHeader } from './SectionHeader';
import { ArrowRightIcon } from './icons';

/** Version haute définition de l'image (les images de démo viennent de picsum.photos). */
const cover = (src: string) => src.replace(/\/\d+\/\d+$/, '/1200/675');

export function ArticlePage({ article }: { article: Article }) {
  const [copied, setCopied] = useState(false);
  const blocks = getBody(article);

  useEffect(() => {
    const previous = document.title;
    document.title = `${article.title} — Fresh`;
    return () => {
      document.title = previous;
    };
  }, [article.title]);

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      /* presse-papiers indisponible : on ignore */
    }
  };

  return (
    <>
      <Header />

      <main className="container">
        <div className="article">
          <a href="#" className="article__back">
            <span className="article__back-icon">
              <ArrowRightIcon />
            </span>
            Retour à l’accueil
          </a>

          <header className="article__head">
            <p className="tag">{article.category}</p>
            <h1 className="article__title">{article.title}</h1>
            {article.excerpt && <p className="article__lead">{article.excerpt}</p>}
            <div className="article__byline">
              <SourceMeta source={article.source} time={article.time} />
              <span className="dot">·</span>
              <span className="article__read">{article.readMin} min de lecture</span>
            </div>
          </header>

          <div className="media article__cover">
            <LazyImage src={cover(article.image)} alt={article.title} />
          </div>

          <div className="article__body">
            {blocks.map((b, i) => {
              if (b.type === 'h2') return <h2 key={i}>{b.text}</h2>;
              if (b.type === 'quote') return <blockquote key={i}>{b.text}</blockquote>;
              return <p key={i}>{b.text}</p>;
            })}
          </div>

          <div className="article__foot">
            <span>Cet article vous a plu ?</span>
            <button type="button" className="btn btn--outline" onClick={copyLink}>
              {copied ? 'Lien copié ✓' : 'Copier le lien'}
            </button>
          </div>
        </div>

        <section className="section">
          <SectionHeader title="À lire aussi" />
          <div className="grid grid--3">
            {relatedTo(article).map((a) => (
              <ArticleCard key={a.id} article={a} variant="compact" />
            ))}
          </div>
        </section>
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}