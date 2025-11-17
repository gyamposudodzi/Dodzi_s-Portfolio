// src/App.jsx
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

  useEffect(() => {
    const handleWheel = (e) => {
      if (isAnimating) return;
      
      if (e.deltaY > 0 && currentPage < pages.length - 1) {
        navigateToPage(currentPage + 1);
      } else if (e.deltaY < 0 && currentPage > 0) {
        navigateToPage(currentPage - 1);
      }
    };

    window.addEventListener('wheel', handleWheel);
    return () => window.removeEventListener('wheel', handleWheel);
  }, [currentPage, isAnimating]);

  const CurrentPageComponent = pages[currentPage].component;

  return (
    <div className="app">
      <Background />
      
      <Navigation 
        pages={pages}
        currentPage={currentPage}
        navigateToPage={navigateToPage}
      />
      
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