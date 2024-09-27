import React from 'react';
import '../styles/Footer.css'; // 

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#" className="footer-link">DOWNLOAD GAME CLIENT</a>
        <a href="#" className="footer-link">DOWNLOAD RIOT MOBILE COMPANION APP</a>
      </div>

      <div className="footer-icons">
        <a href="#"><img src="/path-to-icon/x.svg" alt="X" /></a>
        <a href="#"><img src="/path-to-icon/youtube.svg" alt="YouTube" /></a>
        <a href="#"><img src="/path-to-icon/instagram.svg" alt="Instagram" /></a>
        <a href="#"><img src="/path-to-icon/tiktok.svg" alt="TikTok" /></a>
        <a href="#"><img src="/path-to-icon/facebook.svg" alt="Facebook" /></a>
        <a href="#"><img src="/path-to-icon/discord.svg" alt="Discord" /></a>
      </div>

      <div className="footer-middle">
        <img src="/path-to-logo/riot-games-logo.svg" alt="Riot Games" className="footer-logo" />
        <img src="/path-to-logo/valorant-logo.svg" alt="Valorant" className="footer-logo" />
        <p>© 2020-2024 Riot Games, Inc. RIOT GAMES, VALORANT and any associated logos are trademarks, service marks, and/or registered trademarks of Riot Games, Inc.</p>
      </div>

      <div className="footer-bottom">
        <a href="#" className="footer-link">PRIVACY NOTICE</a>
        <a href="#" className="footer-link">TERMS OF SERVICE</a>
        <a href="#" className="footer-link">COOKIE PREFERENCES</a>
        <img src="/path-to-esrb/esrb-rating.svg" alt="ESRB Rating" className="esrb-logo" />
      </div>
    </footer>
  );
}

export default Footer;
