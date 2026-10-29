import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import type { Story } from '../types';

interface Props {
  stories: Story[];
  startIndex: number;
  onClose: () => void;
}

export function StoryViewer({ stories, startIndex, onClose }: Props) {
  const [storyIdx, setStoryIdx] = useState(startIndex);
  const [slideIdx, setSlideIdx] = useState(0);

  const story = stories[storyIdx];
  const slide = story.slides[slideIdx];

  const next = () => {
    if (slideIdx < story.slides.length - 1) setSlideIdx(slideIdx + 1);
    else if (storyIdx < stories.length - 1) {
      setStoryIdx(storyIdx + 1);
      setSlideIdx(0);
    } else onClose();
  };

  const prev = () => {
    if (slideIdx > 0) setSlideIdx(slideIdx - 1);
    else if (storyIdx > 0) {
      setStoryIdx(storyIdx - 1);
      setSlideIdx(0);
    }
  };

  // Clavier : Échap, flèches
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Bloque le défilement de la page derrière
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, []);

  return createPortal(
    <div className="sv" role="dialog" aria-modal="true" aria-label={`Story ${story.name}`}>
      <div className="sv__frame">
        <img className="sv__img" src={slide.image} alt="" />
        <div className="sv__shade" />

        <div className="sv__bars">
          {story.slides.map((_, i) => (
            <span key={i} className="sv__bar">
              {i < slideIdx && <span className="sv__fill sv__fill--done" />}
              {i === slideIdx && (
                <span
                  key={`${storyIdx}-${slideIdx}`}
                  className="sv__fill sv__fill--active"
                  onAnimationEnd={next}
                />
              )}
            </span>
          ))}
        </div>

        <div className="sv__head">
          <span className="sv__avatar" style={{ background: `hsl(${story.hue} 60% 45%)` }}>
            {story.name.replace('Fresh ', '').charAt(0)}
          </span>
          <strong>{story.name}</strong>
          <button type="button" className="sv__close" aria-label="Fermer" onClick={onClose}>
            ×
          </button>
        </div>

        <button type="button" className="sv__nav sv__nav--prev" aria-label="Précédent" onClick={prev} />
        <button type="button" className="sv__nav sv__nav--next" aria-label="Suivant" onClick={next} />

        <div className="sv__foot">
          {slide.caption && <p className="sv__caption">{slide.caption}</p>}
          {slide.link && (
            <a href={slide.link} className="sv__link" onClick={onClose}>
              Lire l’article
            </a>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}