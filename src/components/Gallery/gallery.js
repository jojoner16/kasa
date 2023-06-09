import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../../data/locations.json';
import '../../styles/gallery.css';

function Gallery() {
  function Card({ image, title }) {
    return (
      <div className="card">
        <img src={image} alt={title} className="cardImg" />
        <div className="cardOverlay"></div>

        <h2 className="cardTitle">{title}</h2>
      </div>
    );
  }

  return (
    <div className="homeGallery">
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            <Link>
              {/* to={`/location/${logement.id}`} */}
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export default Gallery;
