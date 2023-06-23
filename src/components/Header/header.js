import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import HomeLogo from '../../assets/logo_kasa.png';
import '../../styles/Components/header.css';

function Header() {
  const location = useLocation();
  const [, setIsErrorPage] = useState(false);

  useEffect(() => {
    setIsErrorPage(location.pathname === '/error');
  }, [location]);

  const shouldUnderlineNavLink = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="navContainer">
      <Link to="/">
        <img className="headerLogo" src={HomeLogo} alt="logo kasa" />
      </Link>
      <nav className="headerNav">
        <NavLink
          to="/accueil"
          className={`navLink ${
            shouldUnderlineNavLink('/accueil') ? 'underline' : ''
          }`}
        >
          Accueil
        </NavLink>
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
