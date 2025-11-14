import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
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
      <div className="app-layout"> 
      <Navbar />
      <ScrollToTop />
      <main className="page">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>  
    </Router>
  )
}

export default App
