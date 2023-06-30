import React from 'react';
import { NavLink } from 'react-router-dom';
// import Footer from '../../components/Footer/footer';
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
        Retourner sur la page d'accueil
      </NavLink>
    </div>
  );
}

export default ErrorPage;
