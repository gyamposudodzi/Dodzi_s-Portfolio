// src/pages/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Quantum Dashboard",
      description: "Real-time data visualization platform",
      tech: ["React", "D3.js", "WebGL"],
      glowColor: "var(--primary)"
    },
    {
      title: "Neural Interface",
      description: "AI-powered user experience system",
      tech: ["TensorFlow", "Three.js", "WebRTC"],
      glowColor: "var(--secondary)"
    },
    {
      title: "Hologram OS",
      description: "3D operating system interface",
      tech: ["WebXR", "React Three Fiber", "GLSL"],
      glowColor: "var(--accent)"
    }
  ];

  return (
    <div className="projects-container">
      <h2 className="section-title">DIGITAL FRONTIERS</h2>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image">
              <div 
                className="project-glow" 
                style={{ background: `linear-gradient(45deg, transparent, ${project.glowColor}20, transparent)` }}
              ></div>
              <div className="project-overlay">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
            <div className="project-tech">
              {project.tech.map((tech, techIndex) => (
                <span key={techIndex}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;