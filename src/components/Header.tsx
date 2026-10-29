import { useEffect, useState } from 'react';
import { BellIcon, MailIcon, MenuIcon, PhoneIcon } from './icons';

const links = ['Actualités', 'Créateurs', 'Communauté', "S'abonner"];

// À remplacer par vos vraies coordonnées
const PHONE = '+2250000000000';
const EMAIL = 'contact@fresh.com';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header--scrolled' : ''}`}>
      <div className="container header__inner">
        <a href="#" className="logo" aria-label="Fresh, accueil">
          F
          <span className='red'>r</span>
          <span className='blue'>e</span>
          <span className='yellow'>s</span>
          h.
        </a>

        <nav className={`nav ${open ? 'nav--open' : ''}`} aria-label="Navigation principale">
          {links.map((label) => (
            <a key={label} href="#" onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header__actions">
          <a href={`tel:${PHONE}`} className="icon-btn" aria-label="Nous appeler" title="Nous appeler">
            <PhoneIcon />
          </a>
          <a href={`mailto:${EMAIL}`} className="icon-btn" aria-label="Nous écrire un email" title="Nous écrire un email">
            <MailIcon />
          </a>
          <button type="button" className="icon-btn" aria-label="Notifications">
            <BellIcon />
          </button>
          <button
            type="button"
            className="burger"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}