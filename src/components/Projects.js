/************************ PROJECTS ************************/
/*========== PACKAGES ==========*/

import 'bootstrap/dist/css/bootstrap.min.css';

/*========= COMPONENTS =========*/

/*========= MAIN APP ===========*/

function Projects() {
  return (
      <div id="projects-container">
      <h3>projects</h3>
        <ul id="outer-project-ul">
            <li>
                <a href="http://www.farmarfinder.com/" target="http://www.farmarfinder.com/"><img src="../../img/farmar.png" alt="farmar" /></a>
                <h4>farmar</h4>
                <div className="project-icons">
                    <a href="http://www.farmarfinder.com/" target="http://www.farmarfinder.com/"><i class="fas fa-external-link-square-alt"></i></a>
                    <a href="https://github.com/cheisentrout/far_mar" target="https://github.com/cheisentrout/far_mar"><i class="fab fa-github-square"></i></a>
                </div>
                <p>Farmar is an app that uses the USDA's farmers market API to respond to user input and return information about local food markets!</p>
                <ul id="inner-project-ul">
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Ajax</li>
                    <li>Third-party API</li>
                </ul>
            </li>
            <li id="middle-proj">
                <a href="https://clare-project-2.herokuapp.com/" target="https://clare-project-2.herokuapp.com/"><img src="../../img/classroom.png" alt="classroom confidant" id="classroom-img"/></a>
                <h4>Classroom Confidant</h4>
                <div className="project-icons">
                    <a href="https://clare-project-2.herokuapp.com/" target="https://clare-project-2.herokuapp.com/"><i class="fas fa-external-link-square-alt"></i></a>
                    <a href="https://github.com/cheisentrout/clare-project-2" target="https://github.com/cheisentrout/clare-project-2"><i class="fab fa-github-square"></i></a>
                </div>
                <p>The Classroom Confidant is an app designed to support early childhood educators in documenting and presenting their students' developmental progress.</p>
                <ul id="inner-project-ul">
                    <li>Express.js</li>
                    <li>JavaScript</li>
                    <li>MongoDB</li>
                    <li>Bcrypt</li>
                </ul>
            </li>
            <li>
                <a href="https://pure-meadow-65541.herokuapp.com/home" target="https://pure-meadow-65541.herokuapp.com/home"><img src="../../img/back_pocket.png" alt="back pocket" /></a>
                <h4>back pocket</h4>
                <div className="project-icons">
                    <a href="https://pure-meadow-65541.herokuapp.com/home" target="https://pure-meadow-65541.herokuapp.com/home"><i class="fas fa-external-link-square-alt"></i></a>
                    <a href="https://github.com/cheisentrout/back-pocket-frontend" target="https://github.com/cheisentrout/back-pocket-frontend"><i class="fab fa-github-square"></i></a>
                </div>
                <p>Back Pocket is an app inspired by the Cognitive Behavioral Therapy technique of writing "coping cards", or phrases that help reframe or redirect one's thoughts.</p>
                <ul id="inner-project-ul">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Python / Django</li>
                    <li>Material UI</li>
                </ul>
            </li>
        </ul>
      </div>
  );
}

/*=========== EXPORTS ==========*/

export default Projects;
