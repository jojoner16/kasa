import React from 'react';
import FooterLogo from '../../assets/logo_footer.png';
import '../../styles/footer.css';

function Footer() {
  return (
    <footer className="footerContainer">
      <img className="footerLogo" src={FooterLogo} alt="logo kasa" />
      <p className="footerCopyright">© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
