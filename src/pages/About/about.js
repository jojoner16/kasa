import Banner from '../../components/Banner/banner';
import AboutBannerImg from '../../assets/BannerPropos.png';
import Collapse from '../../components/Collapse/collapse';
import collapsesData from '../../data/collapses.json';
import '../../styles/index.css';

function About() {
  return (
    <main>
      {/* La balise <main> est utilisée pour représenter le contenu principal de la page */}
      <div className="about">
        <Banner image={AboutBannerImg} alt="image bannière à propos" />
        {/* Utilisation du composant Banner avec l'image spécifiée et un texte alternatif pour l'accessibilité */}

        <div className="collapse">
          <div className="dropdown">
            {/* Utilisation de la méthode map pour parcourir les données collapsesData */}
            {collapsesData.map((collapses) => {
              return (
                <div key={collapses.id}>
                  {/* Utilisation du composant Collapse avec les propriétés "title" et "content" spécifiées */}
                  <Collapse
                    title={collapses.title}
                    content={collapses.content}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </main>
  );
}

export default About;
