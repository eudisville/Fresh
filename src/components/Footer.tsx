import { footerColumns } from '../data';

const socials = [
  { label: 'Facebook', short: 'f' },
  { label: 'LinkedIn', short: 'in' },
  { label: 'X', short: 'X' },
  { label: 'Instagram', short: 'ig' },
];

export function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#" className="logo">
            Fresh.
          </a>
          <p>Des récits qui allument l’inspiration, le savoir et le divertissement.</p>
          <div className="socials">
            {socials.map((s) => (
              <a key={s.label} href="#" className="social" aria-label={s.label}>
                {s.short}
              </a>
            ))}
          </div>
        </div>

        <div className="footer__cols">
          {footerColumns.map((col) => (
            <div key={col.title}>
              <h4 className="footer__title">{col.title}</h4>
              <ul className="footer__links">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="container">
        <p className="footer__copy">© {new Date().getFullYear()} Fresh. Tous droits réservés.</p>
      </div>
    </footer>
  );
}
