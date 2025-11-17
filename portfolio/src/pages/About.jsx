// src/pages/About.jsx
import React from 'react';

const About = () => {
  return (
    <div className="about-content">
      <div className="hologram-container">
        <div className="hologram">
          <div className="hologram-face"></div>
          <div className="hologram-glow"></div>
        </div>
      </div>
      
      <div className="about-text">
        <h2 className="section-title">THE FUTURE IS NOW</h2>
        <div className="about-description">
          <p>
            I specialize in creating immersive digital experiences that 
            blend cutting-edge technology with intuitive design. With 
            expertise in React, Three.js, and modern web technologies.
          </p>
          <p>
            My work focuses on pushing boundaries and exploring new 
            possibilities in human-computer interaction.
          </p>
        </div>
        
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <div className="skills">
              <span className="skill">React</span>
              <span className="skill">Vue</span>
              <span className="skill">Three.js</span>
              <span className="skill">Javascript</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Backend</h3>
            <div className="skills">
              <span className="skill">Node.js</span>
              <span className="skill">Python</span>
              <span className="skill">WebSockets</span>
              <span className="skill">PostgreSQL</span>
            </div>
          </div>
          
          <div className="skill-category">
            <h3>Emerging Tech</h3>
            <div className="skills">
              <span className="skill">WebGL</span>
              <span className="skill">AR/VR</span>
              <span className="skill">Machine Learning</span>
              <span className="skill">Blockchain</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;