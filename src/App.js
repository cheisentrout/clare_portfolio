/************************ APP.JS ************************/
/*========== PACKAGES ==========*/

import React from 'react'
import Fade from 'react-reveal/Fade'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button'
import { SmoothProvider } from 'react-smooth-scrolling'
import { TinyButton as ScrollUpButton } from 'react-scroll-up-button'

/*========= COMPONENTS =========*/

import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

// /*========= STYLES =========*/
//
// const scrollBtnStyles = {
//     color: "#ACB3AB",
//     width: "75"
// }

/*========= MAIN APP ===========*/

function App() {
  return (
      <div>
        <ScrollUpButton id="svg" style={{ backgroundColor: "#acb3ab73", border: "2px solid #6D8C87", opacity: "50%" }}/>
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
