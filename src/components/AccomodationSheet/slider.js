import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import '../../styles/Components/slideshow.css';

function SlideShow({ images, title, locations }) {
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
      <>
        <div className="slideshow">
          <img src={images[0]} alt="Slide" className="slide" />
        </div>
        <div className="slideTitleContainer">
          <h2 className="slideTitle">{title}</h2>
          <div className="slideLocation">{locations}</div>
        </div>
      </>
    );
  }

  return (
    <>
      <div className="slideshow">
        <div className="slideshowContainer">
          {images.length > 1 && (
            <div onClick={prevSlide} className="arrow chevronLeft">
              <FontAwesomeIcon icon={faChevronLeft} />
            </div>
          )}
          <img src={images[currentSlide]} alt="Slide" className="slide" />
          {images.length > 1 && (
            <div onClick={nextSlide} className="arrow chevronRight">
              <FontAwesomeIcon icon={faChevronRight} />
            </div>
          )}
          {images.length > 1 && (
            <div className="slideNumber">
              {currentSlide + 1}/{images.length}
            </div>
          )}
        </div>
      </div>
      <div className="slideTitleContainer">
        <h2 className="slideTitle">{title}</h2>
        <div className="slideLocation">{locations}</div>
      </div>
    </>
  );
}

export default SlideShow;
