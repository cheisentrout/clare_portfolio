/************************ NAV ************************/
/*========== PACKAGES ==========*/

import 'bootstrap/dist/css/bootstrap.min.css';

/*========= COMPONENTS =========*/

/*========= MAIN APP ===========*/

function Nav() {
  return (
      <div>
        <nav id="main-nav">
            <a href="#hero-container"><h3>CE</h3></a>
            <ul>
                <a href="#about-container"><li>about</li></a>
                <a href="#projects-container"><li>projects</li></a>
                <a href="#contact-container"><li>contact</li></a>
            </ul>
        </nav>
      </div>
  );
}

/*=========== EXPORTS ==========*/

export default Nav;

/*=========== STYLES ============*/

// const navStyles = {
//     background: "blue",
//     color: "white",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "center"
// }
//
// const ulStyles = {
//     listStyle: "none",
//     display: "flex",
//     justifyContent: "space-around"
// }
//
// const liStyles = {
//     margin: "0px 10px"
// }
