// À remplacer par vos vrais liens d'invitation (supprimez un bouton si vous n'en avez pas besoin)
const WHATSAPP_URL = 'https://chat.whatsapp.com/VOTRE_LIEN';
const YOUTUBE_URL = 'https://t.me/VOTRE_CANAL';

const perks = [
  {
    title: 'L’actualité en avant-première',
    text: 'Recevez nos meilleurs articles dès leur publication.',
  },
  {
    title: 'Des échanges avec la rédaction',
    text: 'Posez vos questions, proposez des sujets, donnez votre avis.',
  },
  {
    title: 'Des événements et des invitations',
    text: 'Rencontres, directs et opportunités réservés aux membres.',
  },
];

export function Community() {
  return (
    <div className="community" id="communaute">
      <div>
        <p className="eyebrow">Communauté Fresh</p>
        <h2 className="community__title">Rejoignez la communauté Fresh</h2>
        <p className="community__text">
          Lecteurs, créateurs et curieux se retrouvent ici pour discuter de l’actualité, partager
          leurs idées et ne rien manquer de nos publications.
        </p>
        <div className="community__actions">
          <a className="btn btn--light" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
            Rejoindre sur WhatsApp
          </a>
          <a className="btn btn--ghost" href={YOUTUBE_URL} target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>
      </div>

      <ul className="community__list">
        {perks.map((p) => (
          <li key={p.title} className="community__item">
            <span className="community__check" aria-hidden="true">
              ✓
            </span>
            <div>
              <strong>{p.title}</strong>
              <span>{p.text}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}