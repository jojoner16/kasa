import React from 'react';
import { NavLink } from 'react-router-dom';
import '../../styles/Components/error.css';

function ErrorPage() {
  const isMobile = window.innerWidth <= 767; // Vérifie si l'écran est de taille mobile

  const errorMessage = isMobile
    ? "Oups! La page que \n vous demandez n'existe pas." // Ajoute un saut de ligne après le mot "que" dans la version mobile
    : "Oups! La page que vous demandez n'existe pas.";

  return (
    <div className="errorContainer">
      <p className="errorNumber">404</p>
      <p className="errorText">{errorMessage}</p>
      <NavLink to="/" className="errorLink">
        {/* Le composant NavLink est utilisé pour créer un lien vers la page d'accueil */}
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

export default ErrorPage;
