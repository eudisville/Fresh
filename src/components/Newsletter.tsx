import { useState, type FormEvent } from 'react';

type Status = 'idle' | 'ok' | 'error';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
    setStatus(valid ? 'ok' : 'error');
    // TODO : envoyer l'adresse à votre service d'emailing (Brevo, Mailchimp, API maison…)
    if (valid) setEmail('');
  };

  return (
    <div className="newsletter">
      <div>
        <p className="eyebrow">Recevez l’essentiel en premier</p>
        <p className="newsletter__title">
          Soyez en première ligne de l’actualité,
          <br />
          <span className="accent">abonnez-vous</span> à nos dernières publications
        </p>
      </div>

      <div className="newsletter__box">
        <form className="newsletter__form" onSubmit={onSubmit} noValidate>
          <label className="sr-only" htmlFor="newsletter-email">
            Votre email
          </label>
          <input
            id="newsletter-email"
            className="input"
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status !== 'idle') setStatus('idle');
            }}
            aria-invalid={status === 'error'}
          />
          <button type="submit" className="btn">
            S’abonner
          </button>
        </form>
        <p className={`newsletter__msg newsletter__msg--${status}`} role="status">
          {status === 'ok' && 'Merci ! Vous êtes bien inscrit(e).'}
          {status === 'error' && 'Veuillez saisir une adresse email valide.'}
        </p>
      </div>
    </div>
  );
}
