import React from 'react';
import Navbar from './components/Navbar';
import About from './pages/About/About';
import Experience from './pages/Experience/Experience';
import Projects from './pages/Projects/Projects';
import Publications from './pages/Publications/Publications';
import Courseworks from './pages/Courseworks/Courseworks';
import Contact from './pages/Contact/Contact';
import './App.css';

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="main-content">
        <About />
        <Contact />
        <Courseworks />
        <Experience />
        <Projects />
        <Publications />
      </main>
    </div>
  );
}

export default App; 