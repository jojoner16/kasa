import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import HomeLogo from '../../assets/logo_kasa.png';
import '../../styles/header.css';

function Header() {
  const location = useLocation();
  const [isHomePage, setIsHomePage] = useState(false);

  useEffect(() => {
    if (location.pathname === '/about') {
      setIsHomePage(false);
    } else {
      setIsHomePage(true);
    }
  }, [location]);

  return (
    <nav className="navContainer">
      <Link to="/">
        <img className="headerLogo" src={HomeLogo} alt="logo kasa" />
      </Link>
      <nav className="headerNav">
        <NavLink to="/" className={`navLink ${isHomePage && 'underline'}`}>
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={`navLink ${!isHomePage && 'underline'}`}
        >
          À Propos
        </NavLink>
      </nav>
    </nav>
  );
}

export default Header;
