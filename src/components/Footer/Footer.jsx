import React from 'react'
import './Footer.css'

const Footer = () => {

  const year = new Date().getFullYear();
  const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
  const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
  const githubUrl = import.meta.env.VITE_GITHUB_URL;

  return (
        <div className='footer'>
            <div className="footer-content">
                {/* Left column with copyright info */}
                <div className="footer-left">
                    <p>© Jenni Mikkonen {year}</p>
                </div>
                {/* Right column with contact icons */}
                <div className="footer-right">
                    <div className="footer-links">
                        {/* Email link - opens default mail client */}
                        <a href={`mailto:${contactEmail}`} target="blank" rel="noopener noreferrer"><img src={'/mail_icon.svg'} alt='Email'/></a>
                        {/* LinkedIn link */}
                        <a href={linkedinUrl} target="blank" rel="noopener noreferrer"><img src={'/linkedin_icon.svg'} alt='LinkedIn'/></a>
                        {/* GitHub link */}
                        <a href={githubUrl} target="_blank" rel="noopener noreferrer"><img src={'/github_icon.svg'} alt='GitHub'/></a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer
