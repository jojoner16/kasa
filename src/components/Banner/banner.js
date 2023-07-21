import React from 'react';
import '../../styles/Components/banner.css';

function Banner({ image, texte }) {
  // Le composant Banner prend deux propriétés : image et texte
  return (
    <div className="banner">
      <img className="bannerImg" src={image} alt="Bannière" />
      {/* Div pour ajouter un fond sombre à la bannière (peut-être utilisé pour mettre en évidence le texte) */}
      <div className="bannerDark"></div>
      <span className="bannerText">{texte}</span>
    </div>
  );
}

export default Banner;
