import React from 'react';
import { Link } from 'react-router-dom';
import logements from '../../data/locations.json';
import '../../styles/Components/gallery.css';

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
      {/* Boucle sur chaque logement et crée un article pour chaque élément */}
      {logements.map((logement) => {
        return (
          <article key={logement.id}>
            {/* Crée un article avec une clé unique basée sur l'ID du logement */}
            {/* Crée un lien cliquable vers l'URL spécifique du logement */}
            <Link to={`/location/${logement.id}`}>
              {/* Affiche une carte de logement avec l'image et le titre */}
              <Card image={logement.cover} title={logement.title} />
            </Link>
          </article>
        );
      })}
    </div>
  );
}

export default Gallery;
