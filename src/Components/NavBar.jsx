import { Link, useParams } from 'react-router-dom';
import homeIcon from '../assets/images/icons/Home-Icon.png';
import homeIconActive from '../assets/images/icons/Home-Icon--Active.png';
import searchIcon from '../assets/images/icons/Search-Icon.png';
import searchIconActive from '../assets/images/icons/Search-Icon--Active.png';
import profileIcon from '../assets/images/icons/Profil-Icon.png';

export default function Navbar() {
  //State

  //Comportements

  //Render
  return (
    <nav
      style={{ background: '#15141F' }}
      className="flex justify-around fixed -bottom-0 w-full px-14 py-3 h-20"
    >
      <Link className="place-self-center" to="/">
        <img src={homeIcon} alt="Home-Icon" />
      </Link>

      <Link className="place-self-center" to="/search">
        <img src={searchIcon} alt="Search-Icon" />
      </Link>
      <Link className="place-self-center" to="/profil">
        <img src={profileIcon} alt="Profil-Icon" />
      </Link>
    </nav>
  );
}
