// src/App.jsx - FIXED VERSION
import React, { useState, useEffect } from 'react';
import './App.css';

// Components
import Navigation from './components/Navigation';
import PageIndicator from './components/PageIndicator';
import Background from './components/Background';
import AudioToggle from './components/AudioToggle';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

const App = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [theme, setTheme] = useState('dark'); // Add theme state

  // Theme initialization
  useEffect(() => {
    const savedTheme = localStorage.getItem('portfolio-theme');
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  const pages = [
    { id: 'home', title: 'Home', component: Home },
    { id: 'about', title: 'About', component: About },
    { id: 'projects', title: 'Projects', component: Projects },
    { id: 'contact', title: 'Contact', component: Contact }
  ];

  const navigateToPage = (pageIndex) => {
    if (isAnimating || pageIndex === currentPage) return;
    
    setIsAnimating(true);
    setCurrentPage(pageIndex);
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 800);
  };

  const goToNextPage = () => {
    if (currentPage < pages.length - 1) {
      navigateToPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 0) {
      navigateToPage(currentPage - 1);
    }
  };

  return (
    <div className="app">
      <Background />
      
      <Navigation 
        pages={pages}
        currentPage={currentPage}
        navigateToPage={navigateToPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />
      
      <div className="main-content">
        <div 
          className="container"
          style={{ transform: `translateX(-${currentPage * 100}vw)` }}
        >
          {pages.map((page, index) => {
            const PageComponent = page.component;
            return (
              <section 
                key={page.id} 
                className={`page ${page.id}-page`}
              >
                <PageComponent navigateToPage={navigateToPage} />
              </section>
            );
          })}
        </div>

        {/* Navigation Arrows */}
        <div className="page-navigation-arrows side-arrows">
          <button 
            className={`nav-arrow prev side-arrow ${currentPage === 0 ? 'disabled' : ''}`}
            onClick={goToPrevPage}
            disabled={currentPage === 0}
          >
            ‹
          </button>
          <button 
            className={`nav-arrow next side-arrow ${currentPage === pages.length - 1 ? 'disabled' : ''}`}
            onClick={goToNextPage}
            disabled={currentPage === pages.length - 1}
          >
            ›
          </button>
        </div>
      </div>

      <PageIndicator 
        pages={pages}
        currentPage={currentPage}
        navigateToPage={navigateToPage}
      />
      
      <AudioToggle />
    </div>
  );
};

export default App;