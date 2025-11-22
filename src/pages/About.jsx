// src/pages/About.jsx
import React from 'react';
import '../Styles/About.css';
// Update this path to your actual avatar image
import avatar from '../assets/profile.jpeg';

const About = () => {
  return (
    <div className="about-content timeline-layout">
      <div className="about-header">
        <div className="avatar-section">
          <div className="avatar-container">
            <img src={avatar} alt="Gyamposu Dodzi" className="avatar" />
            <div className="avatar-glow"></div>
          </div>
          <div className="avatar-info">
            <div className="section-badge">ABOUT ME</div>
            <h2 className="section-title">
              Building the Future, <span className="accent-text">One Line at a Time</span>
            </h2>
            <p className="section-subtitle">
              Backend engineer focused on building automated workflows, intelligent services, and AI-powered digital solutions that turn complex problems into simple, scalable experiences.
            </p>
          </div>
        </div>
      </div>

      <div className="content-grid">
        <div className="timeline-section">
          <h3 className="timeline-title">My Journey</h3>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Backend Developer @ TheFluc</h4>
                <span className="timeline-date">2025 - Present</span>
                <p>Developed Firebase Cloud Functions that powered core application features, automated backend workflows, and ensured reliable communication between the frontend and Firestore. Also handled debugging and cloud infrastructure issues.
</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>University Of the People</h4>
                <span className="timeline-date">2025-Present</span>
                <p>Bachelors of Science, Computer Science</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>Open-Source Software Engineering Intern (Appwrite) @ CODEDAY LABS</h4>
                <span className="timeline-date">2023</span>
                <p>Developed cloud functions that would help C# developers send messages through SMS, DISCORD, EMAIL, and X.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>KIBO SCHOOL(woolf university)</h4>
                <span className="timeline-date">2022</span>
                <p>Higher Diploma In Computer Science</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-marker"></div>
              <div className="timeline-content">
                <h4>KIBO SCHOOL - TRYKIBO PROGRAM </h4>
                <span className="timeline-date">2022</span>
                <p>Future Proof with Python, Learnt about the basics of python programming language</p>
              </div>
            </div>
          </div>
        </div>

        <div className="stats-section">
          <div className="stat-cards">
            <div className="stat-card">
              <div className="stat-number">5+</div>
              <div className="stat-label">Projects Completed</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">3+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">10+</div>
              <div className="stat-label">Technologies</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">200%</div>
              <div className="stat-label">Passion Driven</div>
            </div>
          </div>

          <div className="skills-showcase">
            <h4>Core Expertise</h4>
            <div className="expertise-grid">
              <div className="expertise-item">
                <div className="expertise-icon">⚡</div>
                <div className="expertise-content">
                  <h5>Strong Programming Foundation</h5>
                  <p>I write clean, efficient and scalable code applying solid programming principles, data structures and algorithms to solve problems</p>
                </div>
              </div>
              <div className="expertise-item">
                <div className="expertise-icon">🔒</div>
                <div className="expertise-content">
                  <h5>Security And Authentication</h5>
                  <p>I implement secure authentication, authorization and data-protection standards to ensure system integrity and user safety</p>
                </div>
              </div>
              <div className="expertise-item">
                <div className="expertise-icon">🚀</div>
                <div className="expertise-content">
                  <h5>API And Server Development</h5>
                  <p>I build clean, scalable and secure backend APIs using modern frameworks, ensuring fast and reliable communications between systems</p>
                </div>
              </div>
              <div className="expertise-item">
                <div className="expertise-icon">🎯</div>
                <div className="expertise-content">
                  <h5>Database Design And Optimization</h5>
                  <p>I design efficient database schemas and write optimized queries that handle large scale data with high performance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Skills Section */}
      <div className="skills-section">
        <h3 className="skills-title">Technical Skills</h3>
        <div className="skills-grid">
          <div className="skill-category">
            <h4 className="category-title">Frontend</h4>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-name">React</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="80"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">JavaScript</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="90"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">HTML/CSS</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="95"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="category-title">Backend</h4>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-name">Node.js</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="90"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Python</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="95"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">FastAPI/Flask/Django</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="80"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">PostgreSQL</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="75"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">MongoDB</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="60"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">REST APIs</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="92"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="category-title">Tools & Others</h4>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-name">Git</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="90"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Docker</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="75"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Google Cloud</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="60"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">WebSockets</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="60"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">CI/CD</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="80"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Kubernetes</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="60"></div>
                </div>
              </div>
            </div>
          </div>

          <div className="skill-category">
            <h4 className="category-title">Emerging Tech</h4>
            <div className="skills-list">
              <div className="skill-item">
                <span className="skill-name">AI/ML</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="70"></div>
                </div>
              </div>
              <div className="skill-item">
                <span className="skill-name">Blockchain</span>
                <div className="skill-level">
                  <div className="skill-bar" data-level="65"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;