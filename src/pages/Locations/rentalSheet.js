import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import SlideShow from '../../components/AccomodationSheet/slider';
import logements from '../../data/locations.json';
import Host from '../../components/AccomodationSheet/host';
import Rate from '../../components/AccomodationSheet/rate';
import Tag from '../../components/AccomodationSheet/tags';
import Collapse from '../../components/Collapse/collapse';
import '../../styles/index.css';

function RentalSheet() {
  // Obtient les paramètres d'URL (l'ID du logement) à l'aide de useParams
  const { id } = useParams();

  // Recherche du logement correspondant à l'ID dans la liste `logements`
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    // Utilisation de Navigate; Si aucun logement n'est trouvé avec l'ID fourni, redirige vers la page d'erreur 404 en utilisant Navigate
    return <Navigate to="/error" />;
    // ou Utilisation de useNavigate
    // const navigate = useNavigate();
    // navigate('/error');
  }

  // Décomposition des propriétés du logement pour les utiliser plus facilement
  const {
    pictures,
    title,
    location,
    host,
    rating,
    tags,
    description,
    equipments,
  } = logement;

  return (
    <main>
      <div className="accommodation">
        {/* Utilisation du composant SlideShow avec les images, le titre et le lieu de la location */}
        <SlideShow images={pictures} title={title} locations={location} />

        <div className="owner">
          <div className="ownerInformation">
            {/* Utilisation du composant Host pour afficher les informations de l'hôte */}
            <Host name={host.name} picture={host.picture} />
          </div>
          <div className="ownerInformationRate">
            {/* Utilisation du composant Rate pour afficher la note du logement */}
            <Rate rating={rating} />
          </div>
        </div>

        <div className="tagsInformation">
          {/* Utilisation du composant Tag pour afficher les tags du logement */}
          {tags.map((tag, index) => (
            <Tag key={index} tags={tag} />
          ))}
        </div>

        <div className="description">
          <div className="contentDescription">
            {/* Utilisation du composant Collapse pour afficher la description du logement */}
            <Collapse title="Description" content={description} />
          </div>
          <div className="contentEquipement">
            {/* Utilisation du composant Collapse pour afficher les équipements du logement */}
            <Collapse title="Équipements" content={equipments.join('\n')} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default RentalSheet;
