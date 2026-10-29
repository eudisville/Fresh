import { useState } from 'react';
import type { Story } from '../types';
import { StoryViewer } from './StoryViewer';

export function Stories({ stories }: { stories: Story[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      <ul className="stories" aria-label="Stories Fresh">
        {stories.map((s, i) => (
          <li key={s.id}>
            <button type="button" className="story" onClick={() => setOpenIndex(i)}>
              <span className="story__ring">
                <span
                  className="story__avatar"
                  style={{ background: `hsl(${s.hue} 60% 45%)` }}
                  aria-hidden="true"
                >
                  {s.name.replace('Fresh ', '').charAt(0)}
                </span>
              </span>
              <span className="story__name">{s.name}</span>
            </button>
          </li>
        ))}
      </ul>

      {openIndex !== null && (
        <StoryViewer stories={stories} startIndex={openIndex} onClose={() => setOpenIndex(null)} />
      )}
    </>
  );
}