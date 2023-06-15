import React from 'react';
import { useLocation } from 'react-router-dom';
import FooterLogo from '../../assets/logo_footer.png';
import '../../styles/footer.css';

function Footer({ hideFooter }) {
  const location = useLocation();

  // Vérifie si vous êtes sur la page d'erreur
  const isOnErrorPage = location.pathname === '/error';

  // Si vous êtes sur la page d'erreur, n'affiche pas le footer
  if (isOnErrorPage || hideFooter) {
    return null;
  }

  return (
    <footer className="footerContainer">
      <img className="footerLogo" src={FooterLogo} alt="logo kasa" />
      <p className="footerCopyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
