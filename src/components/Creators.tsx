import type { Creator } from '../types';
import { LazyImage } from './LazyImage';

export function Creators({ creators }: { creators: Creator[] }) {
  return (
    <ul className="creators">
      {creators.map((c) => (
        <li key={c.id}>
          <a href="#" className="creator">
            <span className="creator__avatar">
              <LazyImage src={c.avatar} alt="" />
            </span>
            <span>
              <span className="creator__name">{c.name}</span>
              <span className="creator__desk">{c.desk}</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
