import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/slideshow.css';

function SlideShow({ images, title }) {
  // État pour suivre l'index de l'image actuellement affichée
  const [currentSlide, setCurrentSlide] = useState(0);

  // Fonction pour passer à la diapositive suivante
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  // Fonction pour passer à la diapositive précédente
  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  if (images.length === 1) {
    // Si le logement n'a qu'une seule image, on n'affiche ni les flèches ni la numérotation
    return (
      <div className="slideshow">
        <h2 style={{ color: 'black' }}>{title}</h2>
        <img src={images[0]} alt="Slide" className="slide" />
      </div>
    );
  }

  return (
    <div className="slideshow">
      <h2 style={{ color: 'black' }}>{title}</h2>
      <div className="slideshowContainer">
        {images.length > 1 && (
          <button onClick={prevSlide} className="arrow chevronLeft">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
        )}
        <img src={images[currentSlide]} alt="Slide" className="slide" />
        {images.length > 1 && (
          <button onClick={nextSlide} className="arrow chevronRight">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        )}
        {images.length > 1 && (
          <div className="slideNumber">
            {currentSlide + 1}/{images.length}
          </div>
        )}
      </div>
    </div>
  );
}

export default SlideShow;
