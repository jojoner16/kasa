import React, { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import HomeLogo from '../../assets/logo_kasa.png';
import '../../styles/header.css';

function Header() {
  const location = useLocation();
  const [isHome, setIsHome] = useState(false);

  useEffect(() => {
    if (location.pathname === '/about') {
      setIsHome(false);
    } else {
      setIsHome(true);
    }
  }, [location]);
  return (
    <nav className="navContainer">
      <Link to="/">
        <img className="headerLogo" src={HomeLogo} alt="logo kasa" />
      </Link>
      <nav className="headerNav">
        <NavLink to="/" className={`navLink ${isHome && 'underline'}`}>
          Accueil
        </NavLink>
        <NavLink to="/about" className={`navLink ${!isHome && 'underline'}`}>
          A Propos
        </NavLink>
      </nav>
    </nav>
  );
}

export default Header;
