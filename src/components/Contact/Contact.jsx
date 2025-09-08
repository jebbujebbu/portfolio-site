import React, { useRef }  from 'react'
// Import EmailJS library for sending emails without a backend
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {

    // useRef to get a reference to the form element in the DOM
    const form = useRef();
    // Environment variables
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    const contactEmail = import.meta.env.VITE_CONTACT_EMAIL;
    const linkedinUrl = import.meta.env.VITE_LINKEDIN_URL;
    const location = import.meta.env.VITE_LOCATION;

    // Function to handle form submission
    const sendEmail = (e) => {
        e.preventDefault(); // Prevents the default page reload on form submission

        // Send form data via EmailJS service
        emailjs.sendForm(
            serviceId,  // Service ID
            templateId, // Template ID
            form.current,   // Form element reference
            publicKey // Public Key
        )
        .then((result) => {
            // Success callback
            console.log(result.text);
            alert('Message sent successfully!');
            form.current.reset();   // Clear the form fields
        })
        .catch((error) => {
            // Error callback
            console.error(error.text);
            alert('Failed to send message. Please try again.');
        });
    };

    return (
        <div className='contact'>
            {/* SVG gradient title*/}
            <div className="contact-title">
                <svg width="100%" height="80" viewBox="0 0 600 80" xmlns="http://www.w3.org/2000/svg" style={{ display: 'block' }}>
                    <defs>
                        <linearGradient id="contactGradient" x1="0" y1="0" x2="600" y2="0" gradientUnits="userSpaceOnUse">
                            <stop offset="0%" stopColor="#b923e1" />
                            <stop offset="100%" stopColor="#d0deeeff" />
                        </linearGradient>
                    </defs>
                    <text x="50%" y="60" textAnchor="middle" fontSize="65" fontWeight="700" fontFamily="Poppins, Arial, sans-serif" fill="url(#contactGradient)">
                        Get in touch
                    </text>
                </svg>
            </div>
            <div className="contact-sections">
                {/* Left column with contact info */}
                <div className="contact-left">
                    <p>If you have any questions or would like to get in touch, feel free to reach out via email or connect with me on LinkedIn.</p> 
                    {/* Contact details list */}
                    <div className="contact-details">
                        {/* Email link - opens default mail client */}
                        <div className="contact-detail">
                            <a href={`mailto:${contactEmail}`} className="contact-link">
                                <img src={'/mail_icon.svg'} alt="Mail" />
                                <p>{contactEmail}</p>
                            </a>
                        </div>
                        {/* LinkedIn link */}
                        <div className="contact-detail">
                            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                                <img src={'/linkedin_icon.svg'} alt='LinkedIn' className='linkedin-img' />
                                <p>{linkedinUrl.replace('https://', '').replace('www.', '')}</p>
                            </a>
                        </div>
                        {/* Location */}
                        <div className="contact-detail">
                            <img src={'/location_icon.svg'} alt='Location' />
                            <p>{location}</p>
                        </div>
                    </div>
                </div>
                {/* Right column with contact form */}
                <form ref={form} onSubmit={sendEmail} className="contact-right">
                    <label>Your Name</label>
                    <input type="text" placeholder='Enter your name' name='name' required />
                    <label>Your Email</label>
                    <input type="email" placeholder='Enter your email' name='email' required />
                    <label>Your Message</label>
                    <textarea name='message' rows='8' placeholder='Type your message here' required></textarea>
                    <button type='submit' className='contact-submit'>Send Message</button>
                </form>
            </div> 
        </div>
    )
}

export default Contact
