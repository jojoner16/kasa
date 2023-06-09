import { Link } from 'react-router-dom';
import styled from 'styled-components';
import HomeLogo from '../../assets/logo_kasa.png';
import { StyledLink } from '../../utils/style/Atoms';

const NavContainer = styled.nav`
  padding: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  height: 70px;
`;

function Header() {
  return (
    <NavContainer>
      <Link to="/">
        <Logo src={HomeLogo} alt="logo kasa" />
      </Link>
      <div>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to="/about">A Propos</StyledLink>
      </div>
    </NavContainer>
  );
}

export default Header;
