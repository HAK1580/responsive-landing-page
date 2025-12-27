import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Testimonial from './components/Testimonial.jsx'
import CalltoAction from './components/CalltoAction.jsx'
import Footer from './components/Footer.jsx'
function App() {
 
  return (
    <div>
    <Navbar/>
    <Hero/>
    <Features />
    <Testimonial />
    <CalltoAction />
    <Footer />
    </div>
  )
}

export default App