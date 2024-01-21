import React from 'react'
import { useState } from 'react'
import './App.css'
import Navbar from './assets/component/navbar'
import Mydet from './assets/component/Mydet'
import About from './assets/component/about'
import Skills from './assets/component/skills'
import Contact from './assets/component/contact'
import Project from './assets/component/project'

function App() {

  return (
    <div className="App">
    <>
    <Navbar/>
    <Mydet />
    <About />
    <Skills />
    <Project/>
    <Contact />
      </>
    </div>
  )
}

export default App
