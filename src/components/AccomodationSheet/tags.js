import React from 'react';
import '../../styles/Components/tags.css';

function Tag({ tags }) {
  // Le composant Tag prend une propriété : tags qui affiche les tags de chaque location
  return (
    <div className="tagContainer">
      <span className="tagButton">{tags}</span>
    </div>
  );
}

export default Tag;
