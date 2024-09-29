import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo" />
        </div>
        <ul className="navbar-menu">
          <li className="dropdown">
            <button className="dropbtn">INFO</button>
            <div className="dropdown-content">
              <Link to="/uym2">UYM 2.0</Link>
              <Link to="/uym">UYM</Link>
              <Link to="/members">Members</Link>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbtn">MEDIA</button>
            <div className="dropdown-content">
              <Link to="/photos">Photos</Link>
              <Link to="/videos">Videos</Link>
            </div>
          </li>
          <li><Link to="/news">NEWS</Link></li>
          <li><Link to="/leaderboards">LEADERBOARDS</Link></li>
          <li><Link to="/support">SUPPORT</Link></li>
          <li className="dropdown">
            <button className="dropbtn">SOCIALS</button>
            <div className="dropdown-content">
              <a href="https://x.com/UyouthP">X</a>
              <a href="https://www.instagram.com/unitedyouthparliament/">Instagram</a>
              <a href="#linkedin">LinkedIn</a>
              <a href="https://youtube.com/@unitedyouthparliament?si=UmEG_m_32mciJgA9">YouTube</a>
              <a href="https://www.facebook.com/share/xsQkEYrGGPEmh3Ny/?mibextid=qi2Omg">Facebook</a>
            </div>
          </li>
        
        </ul>
        <div className="navbar-right">
          <button className="play-now-btn">REGISTER NOW</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
