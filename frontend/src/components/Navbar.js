import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="main-info">
        <h1>Jay Kim</h1>
        <h2>Software Developer</h2>
      </div>

      <ul className="nav-list">
        <li><a href="#about" className="nav-item">About</a></li>
        <li><a href="#contact" className="nav-item">Contact</a></li>
        <li><a href="#courseworks" className="nav-item">Courseworks</a></li>
        <li><a href="#experience" className="nav-item">Experience</a></li>
        <li><a href="#projects" className="nav-item">Projects</a></li>
        <li><a href="#publications" className="nav-item">Publications</a></li>
      </ul>

      <ul className="social-links">
        <li><a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a></li>
        <li><a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
      </ul>
    </nav>
  );
}

export default Navbar; 