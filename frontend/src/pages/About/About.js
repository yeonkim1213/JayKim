import React from 'react';
import Sidebar from '../../components/Navbar';
import './About.css';

function About() {
  return (
    <div className="page-container">
      <main className="content">
        <section id="about">
          <p>I'm a developer passionate about creating impactful and scalable software solutions. My expertise lies in web development, data analysis, and software engineering, with hands-on experience in frameworks and tools such as React.js, Node.js, MySQL, AWS, and Python.</p>
        </section>
        {/* Your other sections */}
      </main>
    </div>
  );
}

export default About;