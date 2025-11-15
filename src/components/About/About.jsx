import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about'>
            {/* SVG gradient title */}
            <div className="about-title">
                <svg width="100%" height="80" viewBox="0 0 600 80" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                    <defs>
                        <linearGradient id="aboutGradient" x1="0" y1="0" x2="800" y2="0" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#b923e1" />
                            <stop offset="100%" stopColor="#d0deeeff" />
                        </linearGradient>
                    </defs>
                    <text x="50%" y="60" textAnchor="middle" fontSize="40" fontWeight="600" fontFamily="Poppins, Arial, sans-serif" fill="url(#aboutGradient)" stroke="#2b06308e" strokeWidth="3" paintOrder="stroke" >
                        About Me
                    </text>
                </svg>
            </div>
            {/* Feature grid with 3 cards */}
            <div className="about-feature-grid">
                <div className="about-feature-card">
                    <p>I'm an Information Technology engineering student with a current GPA of 4.9/5. I plan to <span className="highlight">graduate in August 2026</span>.</p>
                    <p>I really enjoy learning new things and figuring out how stuff works. When it comes to work, I'm dedicated and detail-oriented. <span className="highlight">I'm always looking for ways to get better at what I do</span>. I've been told I'm a quick learner, a proactive problem solver, and a nice person to work with.</p>
                </div>
                <div className="about-feature-card">
                    <p>Before starting my IT studies, <span className="highlight">I worked as a teacher</span> (Finnish, Finnish as a Second Language), focusing on integration training for adult immigrants. Through this experience, I developed <span className="highlight">strong communication, problem-solving, teamwork, and organizational skills.</span></p>
                    <p>While studying at university, I also worked in various sales and customer service roles. In these jobs, I strengthened my <span className="highlight">precision, flexibility, patience, and the ability to see situations from different perspectives.</span></p>
                    <p>By combining these experiences with my technical knowledge, I’m able to adapt to new challenges, approach problems from multiple angles, and work effectively in diverse teams.</p>
                </div>
                    <div className="about-feature-card">
                    <p>When I’m not studying, I love exercising and spending time outdoors. I also enjoy reading novels, listening to music, knitting socks, and visiting art museums (the picture was taken in Valencia, Spain).</p>
                    <p>My lifelong interest has been in understanding human behavior and psychology.</p>
                </div>
            </div>
        </div>
    )
}

export default About
