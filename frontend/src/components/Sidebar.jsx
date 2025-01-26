import React from 'react';
import './Sidebar.css';

function Sidebar({ activeSection, scrollToSection }) {
  return (
    <nav className="sidebar">
      <div className="profile-section">
        <h1>Jay Kim</h1>
        <h2>Software Developer</h2>
      </div>

      <ul className="nav-links">
        <li 
          className={activeSection === 'about' ? 'active' : ''}
          onClick={() => scrollToSection('about')}
        >
          About
        </li>
        <li 
          className={activeSection === 'projects' ? 'active' : ''}
          onClick={() => scrollToSection('projects')}
        >
          Projects
        </li>
        <li 
          className={activeSection === 'publications' ? 'active' : ''}
          onClick={() => scrollToSection('publications')}
        >
          Publications
        </li>
        <li 
          className={activeSection === 'courseworks' ? 'active' : ''}
          onClick={() => scrollToSection('courseworks')}
        >
          Courseworks
        </li>
        <div className="social-links">
        <a href="mailto:yeonjae.kim.jay@gmail.com" target="_blank" rel="noopener noreferrer">
          <i className="email-icon">📧</i>
        </a>
        <a href="https://linkedin.com/in/ye0njaekim" target="_blank" rel="noopener noreferrer">
          <i className="linkedin-icon">💼</i>
        </a>
        <a href="https://github.com/yeonkim1213" target="_blank" rel="noopener noreferrer">
          <i className="github-icon">💻</i>
        </a>
      </div>
      </ul>

      
    </nav>
  );
}

export default Sidebar; 