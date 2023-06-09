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
  const { id } = useParams();

  // Recherche du logement correspondant à l'ID dans la liste `logements`
  const logement = logements.find((logement) => logement.id === id);

  if (!logement) {
    // Utilisation de Navigate
    return <Navigate to="/error" />;
    // ou Utilisation de useNavigate
    // const navigate = useNavigate();
    // navigate('/error');
  }

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
        <SlideShow images={pictures} title={title} locations={location} />

        <div className="owner">
          <div className="ownerInformation">
            <Host name={host.name} picture={host.picture} />
          </div>
          <div className="ownerInformationRate">
            <Rate rating={rating} />
          </div>
        </div>

        <div className="tagsInformation">
          {tags.map((tag, index) => (
            <Tag key={index} tags={tag} />
          ))}
        </div>

        <div className="description">
          <div className="contentDescription">
            <Collapse title="Description" content={description} />
          </div>
          <div className="contentEquipement">
            <Collapse title="Équipements" content={equipments.join('\n')} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default RentalSheet;
