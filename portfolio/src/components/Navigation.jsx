// src/components/Navigation.jsx
import React from 'react';
import ThemeToggle from './ThemeToggle';

const Navigation = ({ pages, currentPage, navigateToPage, theme, toggleTheme }) => {
  return (
    <nav className="nav-container">
      <div className="logo">
        <span className="logo-text">DODZi</span>
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
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      
    </nav>
  );
};

export default Navigation;