import React from 'react'
import './Portfolio.css'
import portfolio_data from '../../assets/portfolio_data'

const Portfolio = () => {
  
  // Environment variables
  const githubUrl = import.meta.env.VITE_GITHUB_URL;

  return (
    <div className='portfolio'>
        {/* SVG gradient title*/}
        <div className="portfolio-title">
            <svg width="100%" height="80" viewBox="0 0 600 80" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                <defs>
                    <linearGradient id="portfolioGradient" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#b923e1" />
                        <stop offset="100%" stopColor="#d0deeeff" />
                    </linearGradient>
                </defs>
                <text x="50%" y="60" textAnchor="middle" fontSize="40" fontWeight="600" fontFamily="Poppins, Arial, sans-serif" fill="url(#portfolioGradient)">
                    My Projects
                </text>
            </svg>
        </div>
        <div className="portfolio-img">
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"><img src={'/github_icon.svg'} alt='GitHub'/></a>
        </div>
        <div className="portfolio-para">
            <p>
                I have worked on many projects through my studies — for example, a <span className="highlight">booking system for summer cottages</span>, 
                a <span className="highlight">recipe app</span>, and a <span className="highlight">data analysis of IT job markets in North Savo vs. Finland</span>. 
                Some of these were team projects, giving me valuable experience in collaboration and 
                modern development practices. At the moment, I am part of two team projects: a <span className="highlight">Mood Tracker App</span>, and a <span className="highlight">plant care assistant</span> that uses 
                Raspberry Pi and Azure cloud services. 
            </p>
            <p>
                I am currently doing my internship at <a href="https://www.lightningchart.com" target="_blank" rel="noopener noreferrer" className="highlight">LightningChart</a>, where I’m gaining hands-on experience in professional software development and 
                data visualization technologies.
            </p>
            {/* Additionally, I'm upgrading my simple <span className="highlight">Task Manager App</span> into a full-stack application to practice authentication, user-specific tasks, and cloud integration. */}
            <p className="repo-para">Click an image to go directly to its GitHub repository.</p>
        </div>
        {/* Project gallery*/}
        <div className="portfolio-container">
            {/* Data from portfolio_data.js */}
            {portfolio_data.map((work, index) => (
                <a
                    key={index}
                    href={work.link} // Link to project repo
                    target="_blank"
                    rel="noopener noreferrer"
                >
                <img src={work.w_img.startsWith('/') ? work.w_img : `/${work.w_img}`} alt={work.title || 'Project'} />
                </a>
            ))}
        </div>
    </div>
  )
}

export default Portfolio
