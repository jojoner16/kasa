import React from 'react';
import { useLocation } from 'react-router-dom';
import FooterLogo from '../../assets/logo_footer.png';
import '../../styles/Components/footer.css';

function Footer() {
  const location = useLocation();

  // Vérifie si vous êtes sur la page d'accueil ou à propos
  const isHomePage =
    location.pathname === '/' || location.pathname === '/accueil';
  const isAboutPage = location.pathname === '/about';

  // Si vous êtes sur la page d'erreur, n'affiche pas le footer
  if (isHomePage || isAboutPage) {
    return (
      <footer className="footerContainer">
        <img className="footerLogo" src={FooterLogo} alt="logo kasa" />
        <p className="footerCopyright">© 2020 Kasa. All rights reserved</p>
      </footer>
    );
  }
  return null;
}

export default Footer;
