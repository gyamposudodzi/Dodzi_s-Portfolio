// src/components/Background.jsx
import React from 'react';

const Background = () => {
  return (
    <div className="background">
      <div className="grid-lines"></div>
      <div className="floating-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>
      <div className="particles"></div>
    </div>
  );
};

export default Background;