import '../../styles/index.css';
import Banner from '../../components/Banner/banner';
import HomeBannerImg from '../../assets/BannerAccueil.png';
import Gallery from '../../components/Gallery/gallery';

function Home() {
  return (
    <div className="home">
      <Banner texte="Chez vous, partout et ailleurs" image={HomeBannerImg} />
      <Gallery />
    </div>
  );
}

export default Home;
