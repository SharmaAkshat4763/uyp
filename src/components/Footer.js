import React from 'react';
import '../styles/Footer.css'; // 
import logo from '../assets/logo.png'; 
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#" className="footer-link">DOWNLOAD GAME CLIENT</a>
        <a href="#" className="footer-link">DOWNLOAD RIOT MOBILE COMPANION APP</a>
      </div>

      <div className="footer-icons">
        <a href="https://x.com/UyouthP"><img src="https://img.icons8.com/ios-filled/50/DC143C/twitter.png" alt="twitter" /></a>
        <a href="#"><img src="https://img.icons8.com/ios-filled/50/DC143C/youtube-play.png" alt="YouTube" /></a>
        <a href="#"><img src="https://img.icons8.com/ios-filled/50/DC143C/instagram-new.png" alt="Instagram" /></a>

        <a href="#"><img src="https://img.icons8.com/ios-filled/50/DC143C/facebook.png" alt="Facebook" /></a>
        <a href="#"><img src="https://img.icons8.com/ios-filled/50/DC143C/discord-logo.png" alt="Discord" /></a>
      </div>

      <div className="footer-middle">
        <img src="/path-to-logo/riot-games-logo.svg" alt="Riot Games" className="footer-logo" />
        <img src="/path-to-logo/valorant-logo.svg" alt="Valorant" className="footer-logo" />
        <p>© 2020-2024 The United Youth Parliament is a dynamic college program designed to empower students by fostering leadership, debate, and collaboration. It offers a platform for young individuals to engage in discussions on global issues, develop critical thinking skills, and advocate for positive change in their communities.</p>
      </div>

      <div className="footer-bottom">
        <a href="#" className="footer-link">PRIVACY NOTICE</a>
        <a href="#" className="footer-link">TERMS OF SERVICE</a>
        <img src={logo} alt="ESRB Rating" className="esrb-logo" />
      </div>
    </footer>
  );
}

export default Footer;
