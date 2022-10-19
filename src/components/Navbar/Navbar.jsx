import React from 'react';
import { Link } from 'react-router-dom';
import HomeIcon from '../../assets/icons/Home-Icon.png';
import SearchIcon from '../../assets/icons/Search-Icon.png';
import ProfilIcon from '../../assets/icons/Profil-Icon.png';

export default function Navbar() {
  return (
    <nav className="Nav">
      <Link className="Nav__Link" to="/">
        <img src={HomeIcon} alt="Home Icon" />
      </Link>
      <Link className="Nav__Link" to="/search">
        <img src={SearchIcon} alt="Search Icon" />
      </Link>
      <Link className="Nav__Link" to="/Profil">
        <img src={ProfilIcon} alt="Profil Icon" />
      </Link>
    </nav>
  );
}
