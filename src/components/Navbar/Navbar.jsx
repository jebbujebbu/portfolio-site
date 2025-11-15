import React, { useState, useEffect, useRef  } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {

  // Reference to the menu container (for detecting clicks outside of it)
  const menuRef = useRef(null);
  // State to track menu open/close
  const [menuOpen, setMenuOpen] = useState(false);
  // State to control visibility of the hamburger icon
  const [showOpenIcon, setShowOpenIcon] = useState(true);
  // State to fully hide/show menu for animations
  const [hidden, setHidden] = React.useState(true);

  // Detect click outside the menu to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Open menu: show items and hide hamburger icon
  const openMenu = () => {
    setHidden(false);
    setMenuOpen(true);
    setShowOpenIcon(false);
  };

  // Close menu with delay for animation
  const closeMenu = () => {
    setHidden(false); 
    setMenuOpen(false);

    // After animation ends, hide menu completely and show hamburger icon
    setTimeout(() => {
      setHidden(true);
      setShowOpenIcon(true);
    }, 300);
  };

  return (
    <div className='navbar'>
      {/* Logo linking to home */}
      <Link to="/"><img src={'/assets/logo_img.png'} alt='logo'/></Link>
      {/* Navigation menu */}
      <ul ref={menuRef} className={`nav-menu ${menuOpen ? 'active' : ''} ${hidden ? 'hidden' : ''}`}>
        {/* Close menu button */}
        <img src={'/assets/menu_close_icon.svg'} alt='Close Menu' className='menu-close' onClick={closeMenu}/>
        {/* Navigation links */}
        <li className="nav-item"><Link to="/" onClick={closeMenu}>Home</Link></li>
        <li className="nav-item"><Link to="/about" onClick={closeMenu}>About</Link></li>
        <li className="nav-item"><Link to="/skills" onClick={closeMenu}>Skills</Link></li>
        <li className="nav-item"><Link to="/portfolio" onClick={closeMenu}>Projects</Link></li>
        <li className="nav-item"><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
      </ul>
      {/* Hamburger menu icon (only shows when menu is closed) */}
      <img src={'/assets/menu_open_icon.svg'} alt='Open Menu' className={`menu-open ${!showOpenIcon ? 'hidden' : ''}`} onClick={openMenu}/>
    </div>
  )
}

export default Navbar
