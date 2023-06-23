import React from 'react';
import '../../styles/Components/banner.css';

function Banner({ image, texte }) {
  return (
    <div className="banner">
      <img className="bannerImg" src={image} alt="Bannière" />
      <div className="bannerDark"></div>
      <span className="bannerText">{texte}</span>
    </div>
  );
}

export default Banner;
