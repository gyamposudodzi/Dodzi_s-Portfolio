// src/pages/Projects.jsx - Expandable Cards Design
import React, { useState } from 'react';
import '../Styles/Projects.css';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "The Lazarus Project",
      shortDesc: "Advanced Trading System",
      fullDesc: "A comprehensive AI-powered trading management system featuring machine learning algorithms for market prediction, advanced risk management, and automated execution across multiple exchanges.",
      tech: ["FastAPI", "Electron", "Python", "React", "PostgreSQL", "TensorFlow"],
      github: "https://github.com/gyamposudodzi/The_Lazarus_Project",
      live: null,
      status: "In Development",
      category: "Desktop Application",
      glowColor: "var(--secondary)",
      features: ["Machine Learning", "Risk Management", "Multi-Exchange", "Real-time Analytics"],
      metrics: ["95% Accuracy", "10ms Latency", "24/7 Monitoring"]
    },
    {
      id: 2,
      title: "TheFluc",
      shortDesc: "AI-Powered Writing Platform",
      fullDesc: "A revolutionary article writing platform that combines real-time collaboration with AI-powered content generation. Features include advanced markdown support, version control, team management, and seamless publishing workflow.",
      tech: ["React", "JavaScript", "Firebase", "Google Cloud", "OpenAI API", "Node.js"],
      github: "https://github.com/The-African-Wave",
      live: "https://thefluc.com",
      status: "Live",
      category: "Web Platform",
      glowColor: "var(--primary)",
      features: ["Real-time Collaboration", "AI Content Generation", "Team Management", "Version Control"],
      metrics: ["98% Uptime", "2K+ Users", "50ms Response"]
    },
    {
      id: 3,
      title: "Arbitrage Bot",
      shortDesc: "Arbitrage monitoring and trading bot",
      fullDesc: "A comprehensive bot that monitors price differences across multiple cryptocurrency exchanges and executes arbitrage trades automatically to capitalize on market inefficiencies.",
      tech: ["Python", "Mt5", "PostgreSQL", "TensorFlow"],
      github: "https://github.com/gyamposudodzi/Arbitrage-Bot",
      live: null,
      status: "In Development",
      category: "CLI Application",
      glowColor: "var(--secondary)",
      features: ["Multi-Exchange monitoring", "Paper Trading", "Logging & Analytics", "Automated Trade Execution"],
      metrics: ["95% Accuracy", "24/7 Monitoring"]
    },
    {
      id: 4,
      title: "MT5 AutoTrader Version 1.0",
      shortDesc: "Automated Trading Solutions",
      fullDesc: "Sophisticated automated trading solutions for MetaTrader 5 platform, featuring a multi-indicator signal generatorfor XAUUSD trading, complete with real-time trade execution and monitoring.",
      tech: ["Python", "MT5", "PostgreSQL", "Machine Learning", "Data Analysis", "Docker"],
      github: "https://github.com/gyamposudodzi/Lazarus-MT5-Trader-Version-1-",
      live: null,
      status: "Completed",
      category: "Trading Automation - XAUUSD CLI-App",
      glowColor: "var(--accent)",
      features: ["Backtesting Engine", "Combined Indicator Signals", , "Trade Execution and Monitoring"],
      metrics: ["11% profitability", "100+ Trades", "0.1s Execution"]
    },
    {
      id: 5,
      title: "MT5 AutoTrader Version 2.0",
      shortDesc: "Automated Trading Solutions",
      fullDesc: "Sophisticated automated trading solutions for MetaTrader 5 platform, featuring a multi-indicator signal generator for instruments apart from XAUUSD, complete with real-time trade execution and monitoring.",
      tech: ["Python", "MT5", "PostgreSQL", "Machine Learning", "Data Analysis", "Docker"],
      github: "https://github.com/gyamposudodzi/Lazarus-MT5-Trader-Version-2-",
      live: null,
      status: "Completed",
      category: "Trading Automation CLI-App",
      glowColor: "var(--secondary)",
      features: ["Backtesting Engine", "Combined Indicator Signals", , "Trade Execution and Monitoring"],
      metrics: ["15% profitability", "100+ Trades", "0.1s Execution"]
    },
    {
      id: 6,
      title: "Pandoras Box",
      shortDesc: "My Personal Trading Tools Testing Box",
      fullDesc: "This is where i place all the tools that i program for my trading activities for testing before deploying them to my main trading system. It contains workable scripts and non workable scripts for MT5 platform and other",
      tech: ["Python", "MT5", "PostgreSQL", "Firebase", "Data Analysis", "Firestore"],
      github: "https://github.com/gyamposudodzi/pandora-s-box",
      live: null,
      status: "In Development",
      category: "Script Repository",
      glowColor: "var(--primary)",
      features: ["Backtesting Engine", "Market Watch", "Monitoring", "Market Calculations"],
      metrics: ["Contains multiple scripts", "80% workable scripts",]
    }
  ];

  const toggleProject = (projectId) => {
    setExpandedProject(expandedProject === projectId ? null : projectId);
  };

  return (
    <div className="projects-container expandable-design">
      <div className="projects-header">
        <h2 className="section-title">DIGITAL PORTFOLIO</h2>
        <p className="section-subtitle">Click to explore project details</p>
      </div>
      
      <div className="expandable-cards-container">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`expandable-card ${expandedProject === project.id ? 'expanded' : ''}`}
            style={{ '--glow-color': project.glowColor }}
          >
            {/* Card Header - Always Visible */}
            <div 
              className="card-header"
              onClick={() => toggleProject(project.id)}
            >
              <div className="header-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className={`project-status ${project.status.toLowerCase().replace(' ', '-')}`}>
                    {project.status}
                  </span>
                </div>
                
                <h3 className="project-title">{project.title}</h3>
                <p className="project-short-desc">{project.shortDesc}</p>
                
                <div className="tech-preview">
                  {project.tech.slice(0, 3).map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="tech-more">+{project.tech.length - 3}</span>
                  )}
                </div>
              </div>
              
              <div className="expand-indicator">
                <div className="indicator-icon">
                  {expandedProject === project.id ? '−' : '+'}
                </div>
              </div>
            </div>

            {/* Expandable Content */}
            <div className="card-expandable-content">
              <div className="expandable-grid">
                <div className="content-left">
                  <div className="project-description">
                    <h4>About the Project</h4>
                    <p>{project.fullDesc}</p>
                  </div>
                  
                  <div className="project-features">
                    <h4>Key Features</h4>
                    <div className="features-list">
                      {project.features.map((feature, index) => (
                        <div key={index} className="feature-item">
                          <div className="feature-dot"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="content-right">
                  <div className="tech-stack">
                    <h4>Technology Stack</h4>
                    <div className="tech-grid">
                      {project.tech.map((tech, index) => (
                        <div key={index} className="tech-item-full">
                          {tech}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-metrics">
                    <h4>Performance</h4>
                    <div className="metrics-grid">
                      {project.metrics.map((metric, index) => (
                        <div key={index} className="metric-item">
                          <span className="metric-value">{metric}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="project-links">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="project-link github"
                    >
                      <span>View Code</span>
                      <span className="link-arrow">↗</span>
                    </a>
                    
                    {project.live && (
                      <a 
                        href={project.live}
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="project-link live"
                      >
                        <span>Live Demo</span>
                        <span className="link-arrow">↗</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Glow Effect */}
            <div className="card-glow-effect"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;