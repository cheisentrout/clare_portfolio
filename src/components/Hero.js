/************************ HERO ************************/
/*========== PACKAGES ==========*/

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Fade from 'react-reveal/Fade'

/*========= MAIN APP ===========*/

function Hero() {
  return (
      <div id="hero-container">
        <img src="../../img/clare_snow.jpg" alt="clare" />
        <div id="hero-text">
            <Fade left cascade>
                <h2>hi!</h2>
                <p>I'm Clare, a full stack web developer, educator, and musician.</p>
                <a href="../../img/clare-resume.pdf" target="../../img/clare-resume.pdf">
                    ( my resume )
                </a>
            </Fade>
        </div>
      </div>
  );
}

/*=========== EXPORTS ==========*/

export default Hero;
