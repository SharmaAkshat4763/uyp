import React from 'react';
import '../styles/Navbar.css'; // Make sure the CSS is linked correctly

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-left">
          <img src="https://ibb.co/wQXkcfW" alt="logo" className="logo" />
        </div>
        <ul className="navbar-menu">
          <li className="dropdown">
            <button className="dropbtn">INFO</button>
            <div className="dropdown-content">
              <a href="#about">About</a>
              <a href="#modes">Game Modes</a>
              <a href="#characters">Characters</a>
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
              <a href="#twitter">Twitter</a>
              <a href="#instagram">Instagram</a>
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
