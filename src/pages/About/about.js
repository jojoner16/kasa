import Banner from '../../components/Banner/banner';
import AboutBannerImg from '../../assets/BannerPropos.png';
import Collapse from '../../components/Collapse/collapse';
import collapsesData from '../../data/collapses.json';
import '../../styles/index.css';

function About() {
  return (
    <main>
      <div className="about">
        <Banner image={AboutBannerImg} alt="image bannière à propos" />

        <div className="collapse">
          <div className="dropdown">
            {collapsesData.map((collapses) => {
              return (
                <div key={collapses.id}>
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
