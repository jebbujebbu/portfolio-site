import React from 'react'
import './About.css'
import about_img from '../../assets/about_img.png'

const About = () => {
    return (
        <div className='about'>
            {/* Profile image */}
            <div className="about-img-container">
                <img src={about_img} alt='Profile' className='about-img' />
            </div>
            {/* SVG gradient title */}
            <div className="about-title">
                <svg width="100%" height="80" viewBox="0 0 600 80" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                    <defs>
                        <linearGradient id="aboutGradient" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#b923e1" />
                            <stop offset="100%" stopColor="#d0deeeff" />
                        </linearGradient>
                    </defs>
                    <text x="50%" y="60" textAnchor="middle" fontSize="70" fontWeight="700" fontFamily="Poppins, Arial, sans-serif" fill="url(#aboutGradient)">
                        About Me
                    </text>
                </svg>
            </div>
            {/* Feature grid with 3 cards */}
            <div className="about-feature-grid">
                <div className="about-feature-card">
                    <p>I'm an Information Technology engineering student with a current GPA of 4.9/5. I plan to graduate in August 2026.</p>
                    <hr />
                    <p>Before studying IT, I worked as a teacher, focusing on Finnish as a Second Language (FSL) and providing integration and literacy education to adult immigrants.</p>
                </div>
                <div className="about-feature-card">
                    <p>Through teaching experience, I developed strong communication, problem-solving, teamwork, and organizational skills. By combining these skills with my technical knowledge, I’m able to communicate effectively and collaborate well in various IT environments.</p>
                </div>
                    <div className="about-feature-card">
                    <p>When I’m not studying, I love exercising and spending time outdoors. I also enjoy reading novels, listening to music, visiting art museums (the picture was taken in Valencia, Spain), and learning about psychology. Recently, I’ve even taken up knitting.</p>
                </div>
            </div>
        </div>
    )
}

export default About
