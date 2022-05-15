import React from 'react'
import Home from './components/Home'
import Navbar from './components/Navbar'
import About from './components/About'
import Project from './components/Project'
import Testimonial from './components/Testimonial'
import Contact from './components/Contact'
import Footer from './components/Footer'

const App = () => {
  return (
    <>
    <Navbar/>
    <Home/>
    <About/>
    <Project/>
    <Testimonial/>
    <Contact/>
    <Footer/>
    </>
  )
}

export default App