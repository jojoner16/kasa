import Banner from '../../components/Banner/banner';
import HomeBannerImg from '../../assets/BannerAccueil.png';
import Gallery from '../../components/Gallery/gallery';
import '../../styles/index.css';

function Home() {
  return (
    <main>
      <div className="home">
        <Banner
          texte="Chez vous, partout et ailleurs"
          image={HomeBannerImg}
          alt="image banière accueil"
        />
        <Gallery />
      </div>
    </main>
  );
}

export default Home;
