import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ArticleCard, OverlayCard } from './components/ArticleCard';
import { SectionHeader } from './components/SectionHeader';
import { Stories } from './components/Stories';
import { Creators } from './components/Creators';
import { Newsletter } from './components/Newsletter';
import { Community } from './components/Community';
import { Footer } from './components/Footer';
import { ScrollTop } from './components/ScrollTop';
import { Reveal } from './components/Reveal';
import { ArticlePage } from './components/ArticlePage';
import { findArticle } from './articles';
import { useHash } from './useHash';
import { business, creators, editorPick, hero, latest, mustRead, sport, stories } from './data';

export default function App() {
  const hash = useHash();
  const article = findArticle(hash.slice(1));
  return article ? <ArticlePage key={article.id} article={article} /> : <Home />;
}

function Home() {
  return (
    <>
      <Header />

      <main className="container">
        {/* <div className="welcome">
          <p className="eyebrow">Bienvenue sur Fresh</p>
          <p className="welcome__title">
            Des récits ✍️ qui allument l’<span className="accent">inspiration</span> 💡,
            <br />
            le <span className="accent">savoir</span> 📕 et le{' '}
            <span className="accent">divertissement</span> 🎬
          </p>
        </div> */}

        <Hero article={hero} />

        <Reveal className="section">
          <SectionHeader title="Dernières actualités" />
          <div className="grid grid--4">
            {latest.map((a) => (
              <ArticleCard key={a.id} article={a} />
            ))}
          </div>
        </Reveal>

        <Reveal className="section">
          <SectionHeader title="Fresh Stories" />
          <Stories stories={stories} />
        </Reveal>

        <Reveal className="section">
          <SectionHeader title="À ne pas manquer" />
          <div className="must">
            <ArticleCard article={mustRead.left} />
            <OverlayCard article={mustRead.center} />
            <div className="must__side">
              <ArticleCard article={mustRead.topRight} variant="compact" />
              <ArticleCard article={mustRead.bottomRight} variant="compact" />
            </div>
          </div>
        </Reveal>

        <Reveal className="section">
          <SectionHeader title="Le choix de la rédaction" />
          <OverlayCard article={editorPick.main} wide />
          <div className="grid grid--4 grid--spaced">
            {editorPick.items.map((a) => (
              <ArticleCard key={a.id} article={a} variant="compact" />
            ))}
          </div>
        </Reveal>

        <Reveal className="section duo">
          <div>
            <SectionHeader title="Économie" />
            <div className="grid grid--2">
              {business.map((a) => (
                <ArticleCard key={a.id} article={a} variant="compact" />
              ))}
            </div>
          </div>
          <div>
            <SectionHeader title="Sport" />
            <div className="grid grid--2">
              {sport.map((a) => (
                <ArticleCard key={a.id} article={a} variant="compact" />
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="section">
          <SectionHeader title="Nos créateurs" />
          <Creators creators={creators} />
        </Reveal>

        <Reveal className="section">
          <Community />
        </Reveal>

        <Reveal className="section">
          <Newsletter />
        </Reveal>
      </main>

      <Footer />
      <ScrollTop />
    </>
  );
}
