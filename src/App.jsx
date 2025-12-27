import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Testimonial from './components/Testimonial.jsx'
import CalltoAction from './components/CalltoAction.jsx'
import Footer from './components/Footer.jsx'
import { useState } from 'react'
function App() {
  return (
    <div className='flex flex-col overflow-x-hidden' >
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