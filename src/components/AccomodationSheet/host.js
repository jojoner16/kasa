import React from 'react';
import '../../styles/Components/host.css';

function Host({ name, picture }) {
  // Le composant Host prend deux propriétés : name et picture pour le nom et la photo de l'hôte
  return (
    <div className="host">
      <img src={picture} alt={name} className="hostPicture" />
      <div className="hostName">{name}</div>
    </div>
  );
}

export default Host;
