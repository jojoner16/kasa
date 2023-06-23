import React from 'react';
import '../../styles/Components/host.css';

function Host({ name, picture }) {
  return (
    <div className="host">
      <img src={picture} alt={name} className="hostPicture" />
      <div className="hostName">{name}</div>
    </div>
  );
}

export default Host;
