// src/components/PageIndicator.jsx
import React from 'react';

const PageIndicator = ({ pages, currentPage, navigateToPage }) => {
  return (
    <div className="page-indicator">
      {pages.map((_, index) => (
        <button
          key={index}
          className={`indicator-dot ${currentPage === index ? 'active' : ''}`}
          onClick={() => navigateToPage(index)}
        >
          <div className="dot-glow"></div>
        </button>
      ))}
    </div>
  );
};

export default PageIndicator;