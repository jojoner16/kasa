import React from 'react';
import { useParams } from 'react-router-dom';
import SlideShow from '../../components/AccomodationSheet/slider';
import logements from '../../data/locations.json';

function RentalSheet() {
  const { id } = useParams();

  // Recherche du logement correspondant à l'ID dans la liste `logements`
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    return <div>Logement non trouvé.</div>; // Gérer le cas où aucun logement n'est trouvé avec l'ID donné
  }

  const { pictures, title } = logement;

  return (
    <main>
      <div className="accommodation">
        {/* <h1>Location:</h1> */}
        <SlideShow images={pictures} title={title} />
      </div>
    </main>
  );
}

export default RentalSheet;
