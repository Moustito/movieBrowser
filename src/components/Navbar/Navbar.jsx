import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/images/icons/Home-Icon.png';
import SearchIcon from '../../assets/images/icons/Search-Icon.png';
import ProfilIcon from '../../assets/images/icons/Profil-Icon.png';
import '../../assets/styles/NavBar.css';

export default function Navbar() {
  return (
    <nav className="nav">
      <Link className="nav__link" to="/">
        <img src={HomeIcon} alt="Home Icon" />
      </Link>
      <Link className="nav__link" to="/search">
        <img src={SearchIcon} alt="Search Icon" />
      </Link>
      <Link className="nav__link" to="/Profil">
        <img src={ProfilIcon} alt="Profil Icon" />
      </Link>
    </nav>
  );
}
