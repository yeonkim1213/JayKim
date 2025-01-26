import React from 'react';

function Home() {
  return (
    <div className="home">
      <section className="profile">
        <div className="profile-photo">
          <img src="/path-to-your-photo.jpg" alt="Jay Kim" />
        </div>
        
        <div className="intro">
          <h1>Jay Kim</h1>
          <p>I am a Computer Science graduate specializing in software development, with expertise in full-stack development and data analysis. I have a proven track record of creating user-centered and impactful applications, grounded in a strong foundation of accessibility and research. Passionate about leveraging technology to drive meaningful change, I am eager to pursue full-time software development opportunities.</p>
        </div>
      </section>

      <section className="skills">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Skills</h3>
            <ul>
              <li>Java, Python, C++, C#, JavaScript, TypeScript, Django, React.js, Node.js</li>
              <li>MySQL, SQLite, MariaDB, AWS, Docker, Google Cloud Platform</li>
              <li>Git, Visual Studio, VS Code, IntelliJ IDEA, Eclipse</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="resume">
        <h2>Resume</h2>
        <a href="/public/jaykimResume.pdf">
          Resume
        </a>
      </section>

      <section className="contact">
        <h2>Contact Me</h2>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send Message</button>
        </form>

        <div className="social-links">
          <a href="mailto:yeonjae.kim.jay@gmail.com">
            <i className="email-icon"></i>
          </a>
          <a href="https://github.com/yeonkim1213">
            <i className="github-icon"></i>
          </a>
          <a href="https://linkedin.com/in/ye0njaekim">
            <i className="linkedin-icon"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default Home;