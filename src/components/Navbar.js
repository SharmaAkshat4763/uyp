import React from 'react';
import '../styles/Navbar.css'; // Make sure the CSS is linked correctly
import logo from '../assets/logo.png'; // Adjust the path according to your project structure

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src={logo} alt="logo" className="logo" /> {/* Set logo here */}
        </div>
        <ul className="navbar-menu">
          <li className="dropdown">
            <button className="dropbtn">INFO</button>
            <div className="dropdown-content">
              <a href="#about">UYM 2.0</a>
              <a href="#modes">UYM</a>
              <a href="#characters">Members</a>
            </div>
          </li>
          <li className="dropdown">
            <button className="dropbtn">MEDIA</button>
            <div className="dropdown-content">
              <a href="#media">Photos</a>
              <a href="#videos">Videos</a>
            </div>
          </li>
          <li><a href="#news">NEWS</a></li>
          <li><a href="#leaderboards">LEADERBOARDS</a></li>
          <li><a href="#support">SUPPORT</a></li>
          <li className="dropdown">
            <button className="dropbtn">OUR SOCIALS</button>
            <div className="dropdown-content">
              <a href="https://x.com/UyouthP">X</a>
              <a href="https://www.instagram.com/_akshat4763/saved/">Instagram</a>
              <a href="#instagram">LinkedIn</a>
              <a href="#instagram">Facebook</a>
            </div>
          </li>
          <li><a href="#esports">ESPORTS</a></li>
        </ul>
        <div className="navbar-right">
          <button className="play-now-btn">REGISTER NOW</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
