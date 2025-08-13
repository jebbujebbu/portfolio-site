import React from 'react'
// Import Link component for navigation without page reload
import { Link } from 'react-router-dom';
import './Home.css'
import profile_img from '../../assets/profile_img.png'

const Home = () => {
  return (
    <div className='home'>
        {/* Profile Picture */}
        <img src={profile_img} alt='Profile' className='home-img' />
        {/* SVG gradient title */}
        <div className="home-title">
          <svg width="100%" height="80" viewBox="0 0 600 80" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
            <defs>
              <linearGradient id="homeGradient" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#b923e1" />
                <stop offset="100%" stopColor="#d0deeeff" />
              </linearGradient>
            </defs>
            <text x="50%" y="60" textAnchor="middle" fontSize="65" fontWeight="700" fontFamily="Poppins, Arial, sans-serif" fill="url(#homeGradient)">
              Hi, I'm Jenni!
            </text>
          </svg>
        </div>
        {/* Introduction text */}
        <div className="home-intro">
          <p>I'm a third-year Information Technology engineering student from Kuopio, Finland.</p> 
          <p>I'm open to internships and junior developer jobs.</p>
        </div>
        {/* Action buttons/links */}
        <div className="home-action">
            {/* Link to contact form */}
            <div className="home-connect"><Link to="/contact">Send Me a Message</Link></div>
            {/* Link to projects page */}
            <div className="home-resume"><Link to="/portfolio">My Projects</Link></div>
        </div>
    </div>
  )
}

export default Home
