import React from 'react';
import '../styles/MainContent.css'; // Ensure you create this file for styling

function MainContent() {
  return (
    <div className="main-content">
      <video
        src="https://media.gettyimages.com/id/1152171654/video/india-gate-at-night-delhi.mp4?s=mp4-640x640-gi&k=20&c=cURbnOdrCfluuXB8Y_rY3x9ulhZKC06bOrpg-SawKC0="
        autoPlay
        loop
        muted
        className="background-video"
      ></video>
      <div className="overlay-content">
        <p>UYP 3.0</p>
        <h1>UYP 3.0</h1>
        
        <button className="cta-button">Register Now</button>
      </div>
    </div>
  );
}

export default MainContent;
