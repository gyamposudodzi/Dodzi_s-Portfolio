// src/pages/Home.jsx
import React from 'react';

const Home = ({ navigateToPage }) => {
  return (
    <div className="home-content">
      <div className="hero-glow"></div>
      <h1 className="hero-title">
        <span className="title-line">INNOVATE</span>
        <span className="title-line">DESIGN</span>
        <span className="title-line">CREATE</span>
      </h1>
      <p className="hero-subtitle">
        Building the future, one pixel at a time
      </p>
      <div className="hero-cta">
        <button className="cta-button" onClick={() => navigateToPage(2)}>
          <span>View Projects</span>
          <div className="button-glow"></div>
        </button>
        <button className="cta-button secondary" onClick={() => navigateToPage(3)}>
          <span>Get In Touch</span>
        </button>
      </div>
      
      <div className="tech-stack">
        <div className="tech-item">REACT</div>
        <div className="tech-item">THREE.JS</div>
        <div className="tech-item">WEBGL</div>
        <div className="tech-item">AI/ML</div>
      </div>
    </div>
  );
};

export default Home;