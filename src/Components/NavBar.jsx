import { Link } from 'react-router-dom';
import homeIcon from '../assets/images/icons/Home-Icon.png';
import searchIcon from '../assets/images/icons/Search-Icon.png';
import profileIcon from '../assets/images/icons/Profil-Icon.png';

export default function Navbar() {
  return (
    <nav
      style={{ background: '#7E7E7E' }}
      className="flex justify-around pt-2.5 absolute -bottom-0 w-full"
    >
      <Link to="/">
        <img src={homeIcon} alt="Home-Icon" />
      </Link>
      <Link to="/search">
        <img src={searchIcon} alt="Search-Icon" />
      </Link>
      <Link to="/profil">
        <img src={profileIcon} alt="Profil-Icon" />
      </Link>
    </nav>
  );
}
