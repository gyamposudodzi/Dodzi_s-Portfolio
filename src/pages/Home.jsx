// src/pages/Home.jsx
import React from 'react';
import '../Styles/Home.css';

const Home = ({ navigateToPage }) => {
  return (
    <div className="home-content split-layout">
      <div className="split-left">
        <div className="hero-badge">
          <span>👋 HELLO, I'M A</span>
        </div>
        <h1 className="hero-title">
          <span className="title-gradient">BACKEND</span>
          <span className="title-gradient">DEVELOPER</span>
        </h1>
        <p className="hero-description">
          I build <span className="accent-text">scalable applications</span> and 
          <span className="accent-text"> intelligent automation</span> systems. 
          Specializing in modern Web/Desktop technologies and AI integration.
        </p>
        <div className="hero-stats">
          <div className="stat">
            <span className="stat-number">5+</span>
            <span className="stat-label">Projects</span>
          </div>
          <div className="stat">
            <span className="stat-number">3+</span>
            <span className="stat-label">Years</span>
          </div>
          <div className="stat">
            <span className="stat-number">200%</span>
            <span className="stat-label">Passion</span>
          </div>
        </div>
        <div className="hero-cta">
          <button className="cta-button primary" onClick={() => navigateToPage(2)}>
            <span>Explore My Work</span>
            <div className="button-arrow">→</div>
          </button>
          <button className="cta-button secondary" onClick={() => navigateToPage(3)}>
            <span>Let's Connect</span>
          </button>
        </div>
      </div>
      
      <div className="split-right">
        <div className="floating-tech">
          <div className="tech-orb python">PYTHON</div>
          <div className="tech-orb react">REACT</div>
          <div className="tech-orb node">NODE.JS</div>
          <div className="tech-orb ai">AI/ML</div>
          <div className="tech-orb db">POSTGRES</div>
          <div className="tech-orb cloud">CLOUD</div>
        </div>
      </div>
    </div>
  );
};

export default Home;