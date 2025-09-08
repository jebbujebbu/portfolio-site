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
                    <linearGradient id="portfolioGradient" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="#b923e1" />
                        <stop offset="100%" stopColor="#d0deeeff" />
                    </linearGradient>
                </defs>
                <text x="50%" y="60" textAnchor="middle" fontSize="65" fontWeight="700" fontFamily="Poppins, Arial, sans-serif" fill="url(#portfolioGradient)">
                    My Projects
                </text>
            </svg>
        </div>
        {/* Description */}
        <div className="portfolio-para">
            <p>Here are some of my projects.</p>
            <p>Click an image to go directly to its GitHub repository.</p>
            <hr />
            {/* GitHub profile link */}
            <a href={githubUrl} target="_blank" rel="noopener noreferrer"><img src={'/github_icon.svg'} alt='GitHub'/></a>
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
