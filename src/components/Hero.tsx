import type { Article } from '../types';
import { LazyImage } from './LazyImage';
import { SourceMeta, TagLine } from './ArticleCard';

export function Hero({ article }: { article: Article }) {
  const href = `#${article.id}`;
  return (
    <article className="hero">
      <a href={href} className="media hero__media" aria-hidden="true" tabIndex={-1}>
        <LazyImage src={article.image} alt="" />
      </a>
      <div className="hero__body">
        <SourceMeta source={article.source} time={article.time} />
        <h1 className="hero__title">
          <a href={href}>{article.title}</a>
        </h1>
        <p className="hero__excerpt">{article.excerpt}</p>
        <TagLine category={article.category} readMin={article.readMin} />
      </div>
    </article>
  );
}
