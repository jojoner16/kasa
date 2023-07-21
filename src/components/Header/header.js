import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import HomeLogo from '../../assets/logo_kasa.png';
import '../../styles/Components/header.css';

function Header() {
  // Utilisation de useLocation pour obtenir l'objet location qui contient l'URL actuelle
  const location = useLocation();
  // Utilisation de useState pour gérer l'état isErrorPage (true si l'URL est "/error", sinon false)
  const [, setIsErrorPage] = useState(false);

  // Utilisation de useEffect pour mettre à jour l'état isErrorPage lorsque l'URL change
  useEffect(() => {
    setIsErrorPage(location.pathname === '/error');
  }, [location]);

  // Fonction pour vérifier si un NavLink doit être souligné (active) en fonction de son chemin
  const shouldUnderlineNavLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navContainer">
      {/* Utilisation du composant Link pour créer un lien vers la page d'accueil */}
      <Link to="/">
        <img className="headerLogo" src={HomeLogo} alt="logo kasa" />
      </Link>
      <nav className="headerNav">
        {/* Utilisation du composant NavLink pour créer un lien vers la page d'accueil */}
        <NavLink
          to="/accueil"
          className={`navLink ${
            shouldUnderlineNavLink('/accueil') ? 'underline' : ''
          }`}
        >
          Accueil
        </NavLink>
        {/* Utilisation du composant NavLink pour créer un lien vers la page "À Propos" */}
        <NavLink
          to="/about"
          className={`navLink ${
            shouldUnderlineNavLink('/about') ? 'underline' : ''
          }`}
        >
          À Propos
        </NavLink>
      </nav>
    </nav>
  );
}

export default Header;
