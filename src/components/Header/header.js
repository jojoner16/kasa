import { Link } from 'react-router-dom';
import HomeLogo from '../../assets/logo_kasa.png';
import '../../styles/header.css';

function Header() {
  return (
    <nav className="navContainer">
      <Link to="/">
        <img className="headerLogo" src={HomeLogo} alt="logo kasa" />
      </Link>
      <nav className="headerNav">
        <Link to="/" className="navLink">
          Accueil
        </Link>
        <Link to="/about" className="navLink">
          A Propos
        </Link>
      </nav>
    </nav>
  );
}

export default Header;
