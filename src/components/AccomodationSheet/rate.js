import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import '../../styles/Components/rate.css';

function Rate({ rating }) {
  // Le composant Rate prend une propriété : rating
  const score = rating;
  // Crée un tableau de notes de 1 à 5 (nombre d'étoiles possibles)
  const notes = [1, 2, 3, 4, 5];
  return (
    <div className="rateContainer">
      {/* Utilisation de la méthode map pour afficher les étoiles correspondant aux notes */}
      {notes.map((note) => (
        <FontAwesomeIcon
          key={note.toString()}
          className={note <= score ? 'star' : 'starEmpty'}
          icon={faStar}
        />
        // Utilisation du composant FontAwesomeIcon pour afficher les étoiles en utilisant l'icône faStar
        // La classe "star" sera ajoutée aux étoiles remplies (note <= score)
        // La classe "starEmpty" sera ajoutée aux étoiles vides (note > score)
      ))}
    </div>
  );
}

export default Rate;
