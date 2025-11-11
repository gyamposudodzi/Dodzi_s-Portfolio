// src/components/Navigation.jsx
import React from 'react';

const Navigation = ({ pages, currentPage, navigateToPage }) => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <span className="logo-text">NEXUS</span>
        <div className="logo-dot"></div>
      </div>
      
      <div className="nav-links">
        {pages.map((page, index) => (
          <button
            key={page.id}
            className={`nav-link ${currentPage === index ? 'active' : ''}`}
            onClick={() => navigateToPage(index)}
          >
            <span className="link-text">{page.title}</span>
            <span className="link-indicator"></span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;