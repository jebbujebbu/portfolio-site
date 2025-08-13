import React from 'react'
import './Footer.css'
import mail_icon from '../../assets/mail_icon.svg'
import linkedin_icon from '../../assets/linkedin_icon.svg'
import github_icon from '../../assets/github_icon.svg'

const Footer = () => {
  return (
        <div className='footer'>
            <div className="footer-content">
                {/* Left column with copyright info */}
                <div className="footer-left">
                    <p>© 2025 Jenni Mikkonen. All rights reserved.</p>
                </div>
                {/* Right column with contact icons */}
                <div className="footer-right">
                    <div className="footer-links">
                        {/* Email link - opens default mail client */}
                        <a href="mailto:jebbujebbu.codes@gmail.com" target="blank" rel="noopener noreferrer"><img src={mail_icon} alt='Email'/></a>
                        {/* LinkedIn link */}
                        <a href="https://linkedin.com/in/jenni-e-mikkonen" target="blank" rel="noopener noreferrer"><img src={linkedin_icon} alt='LinkedIn'/></a>
                        {/* GitHub link */}
                        <a href="https://github.com/jebbujebbu" target="_blank" rel="noopener noreferrer"><img src={github_icon} alt='GitHub'/></a>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Footer
