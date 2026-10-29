import type { Article } from '../types';
import { LazyImage } from './LazyImage';

export function SourceMeta({ source, time }: Pick<Article, 'source' | 'time'>) {
  return (
    <div className="meta">
      <span className="meta__badge" aria-hidden="true">
        {source.replace('Fresh ', '').charAt(0)}
      </span>
      <span>{source}</span>
      <span className="dot">·</span>
      <span>{time}</span>
    </div>
  );
}

export function TagLine({ category, readMin }: Pick<Article, 'category' | 'readMin'>) {
  return (
    <p className="tag-line">
      <span className="tag">{category}</span>
      <span className="dot">·</span>
      <span>{readMin} min de lecture</span>
    </p>
  );
}

interface CardProps {
  article: Article;
  variant?: 'default' | 'compact';
}

export function ArticleCard({ article, variant = 'default' }: CardProps) {
  const href = `#${article.id}`;
  return (
    <article className={`card card--${variant}`}>
      <a href={href} className="media card__media" aria-hidden="true" tabIndex={-1}>
        <LazyImage src={article.image} alt="" />
      </a>
      <div className="card__body">
        <SourceMeta source={article.source} time={article.time} />
        <h3 className="card__title">
          <a href={href}>{article.title}</a>
        </h3>
        {variant === 'default' && article.excerpt && (
          <p className="card__excerpt">{article.excerpt}</p>
        )}
        <TagLine category={article.category} readMin={article.readMin} />
      </div>
    </article>
  );
}

interface OverlayProps {
  article: Article;
  wide?: boolean;
}

export function OverlayCard({ article, wide = false }: OverlayProps) {
  return (
    <a href={`#${article.id}`} className={`overlay ${wide ? 'overlay--wide' : ''}`}>
      <div className="media">
        <LazyImage src={article.image} alt="" />
      </div>
      <div className="overlay__shade" />
      <div className="overlay__body">
        <SourceMeta source={article.source} time={article.time} />
        <h3 className="overlay__title">{article.title}</h3>
        {article.excerpt && <p className="overlay__excerpt">{article.excerpt}</p>}
        <TagLine category={article.category} readMin={article.readMin} />
      </div>
    </a>
  );
}
