import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
// import Experience from './components/Experience/Experience'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import ScrollToTop from './components/ScrollToTop'

const App = () => {
  return (
    <Router>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/experience" element={<Experience />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
