import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Home from './pages/About/About';
import Projects from './pages/Projects/Projects';
import Publications from './pages/Publications/Publications';
import Courseworks from './pages/Courseworks/Courseworks';
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200 && 
            window.scrollY < sectionTop + sectionHeight - 200) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="app">
      <Sidebar activeSection={activeSection} scrollToSection={scrollToSection} />
      
      <main className="content">
        <section id="about">
          <Home />
        </section>
        <section id="projects">
          <Projects />
        </section>
        <section id="publications">
          <Publications />
        </section>
        <section id="courseworks">
          <Courseworks />
        </section>
      </main>
    </div>
  );
}

export default App; 