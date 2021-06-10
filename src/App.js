/************************ APP.JS ************************/
/*========== PACKAGES ==========*/

import React from 'react'
import Fade from 'react-reveal/Fade'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'

/*========= COMPONENTS =========*/

import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

/*========= MAIN APP ===========*/

function App() {
  return (
      <div>
        <Fade top cascade>
            <Nav />
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
        </Fade>
      </div>
  );
}

/*=========== EXPORTS ==========*/

export default App;
