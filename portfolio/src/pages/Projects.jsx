// src/pages/Projects.jsx
import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "TheFluc",
      description: "An Article  writing platform",
      tech: ["React", "Javascript", "Firebase", "Google Cloud"],
      glowColor: "var(--primary)"
    },
    {
      title: "The Lazarus Project",
      description: "Fully-Blown AI-Powered Trade Management System",
      tech: ["FastAPI", "Electron", "Python", "React", "Postgresql"],
      glowColor: "var(--secondary)"
    },
    {
      title: "MT5 AutoTraders V1 and V2",
      description: "Automated Signals Generator and Trader for MT5",
      tech: ["Python", "MT5", "Postgresql"],
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