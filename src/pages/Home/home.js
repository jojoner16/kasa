import Banner from '../../components/Banner/banner';
import HomeBannerImg from '../../assets/BannerAccueil.png';
import Gallery from '../../components/Gallery/gallery';
import '../../styles/index.css';

function Home() {
  return (
    <main>
      {/* La balise <main> est utilisée pour représenter le contenu principal de la page */}

      <div className="home">
        {/* Composant Banner pour afficher la bannière de la page d'accueil */}
        <Banner
          texte="Chez vous, partout et ailleurs"
          image={HomeBannerImg} // L'image qui sera affichée dans la bannière
          alt="image banière accueil"
        />
        <Gallery /> {/* Composant Gallery pour afficher une galerie d'images */}
      </div>
    </main>
  );
}

export default Home;
