import React from 'react'
import './Skills.css'

const Skills = () => {
  return (
    <div className="skills">
      {/* SVG gradient title*/}
      <div className="skills-title">
        <svg width="100%" height="80" viewBox="0 0 600 80" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
          <defs>
            <linearGradient id="skillsGradient" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#b923e1" />
              <stop offset="100%" stopColor="#d0deeeff" />
            </linearGradient>
          </defs>
          <text x="50%" y="60" textAnchor="middle" fontSize="65" fontWeight="700" fontFamily="Poppins, Arial, sans-serif" fill="url(#skillsGradient)">
            My Skills
          </text>
        </svg>
      </div>
      {/* Skills Container */}
      <div className="skills-list">
        {/* Introduction Section */}
        <section className="skill-section">
          <p>
            I am specializing in <strong>full-stack development</strong> and have a strong interest in <strong>big data</strong> technologies. My focus is on creating scalable, modern web solutions that are technically strong and user-friendly.
          </p>
        </section>
        {/* Technical Skills Section */}
        <section className="skill-section">
          <h2>Technical Skills I’m Learning</h2>
          <ul>
            <li><span>Programming Languages:</span> Python, C#, JavaScript, SQL</li>
            <li><span>Web Development:</span> HTML, CSS, React, Node.js, .NET, REST APIs, Responsive Design</li>
            <li><span>Mobile Development:</span> Android</li>
            <li><span>Databases & Cloud:</span> MySQL, Azure, Azure DevOps</li>
            <li><span>System Administration:</span> Windows Server (Active Directory), Linux OS</li>
            <li><span>Networking:</span> TCP/IP, Routing</li>
            <li><span>Version Control:</span> Git, GitHub</li>
            <li><span>Testing & Quality Assurance:</span> Unit Testing, CI/CD</li>
            <li><span>Security & Tools:</span> Secure Software Development, Cybersecurity</li>
            <li><span>Other:</span> Software Project Management, Algorithms, IoT, Big Data, Business Intelligence, Intro to AI/ML</li>
          </ul>
        </section>
        {/* Education Section */}
        <section className="skill-section">
          <h2>Education</h2>
          <ul>
            <li>Bachelor's Degree in Information Technology (expected August 2026)</li>
            <li>Pedagogical Studies for Teachers (2018)</li>
            <li>Master of Arts, Finnish Language (2014)</li>
          </ul>
        </section>
        {/* Certifications Section */}
        <section className="skill-section">
          <h2>Certifications</h2>
          <ul>
            <li>Cisco Networking Academy: CCNA - Introduction to Networks</li>
            <li>Cisco Networking Academy: CCNA - Switching, Routing, and Wireless Essentials</li>
            <li>Fortinet Training Institute: FCF - Introduction to the Threat Landscape 2.0</li>
          </ul>
        </section>
        {/* Languages Section */}
        <section className="skill-section">
          <h2>Languages</h2>
          <ul>
            <li>Finnish (native)</li>
            <li>English (fluent)</li>
            <li>Swedish (basic)</li>
          </ul>
        </section>
        {/* Soft Skills Section */}
        <section className="skill-section">
          <h2>Soft Skills</h2>
          <ul>
            <li>Communication & Active Listening</li>
            <li>Problem-solving</li>
            <li>Teamwork</li>
            <li>Adaptability</li>
            <li>Time Management</li>
            <li>Team Leadership & Mentoring</li>
            <li>Organizational Skills</li>
          </ul>
        </section>
      </div>
    </div>
  )
}

export default Skills
