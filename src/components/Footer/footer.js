import React from 'react';
import FooterLogo from '../../assets/logo_footer.png';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 30px;
  font-family: 'Montserrat', sans-serif;
  background-color: #000000;
`;

const Logo = styled.img`
  margin-top: 30px;
`;

const Text = styled.p`
  color: #ffffff;
  font-size: 24px;
`;

function Footer() {
  return (
    <FooterContainer>
      <Logo src={FooterLogo} alt="" />
      <Text className="footer__text-copyright">
        © 2020 Kasa. All rights reserved
      </Text>
    </FooterContainer>
  );
}

export default Footer;
