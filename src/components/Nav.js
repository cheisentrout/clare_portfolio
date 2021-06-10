/************************ NAV ************************/
/*========== PACKAGES ==========*/

import 'bootstrap/dist/css/bootstrap.min.css';

/*========= COMPONENTS =========*/

/*========= MAIN APP ===========*/

function Nav() {
  return (
      <div>
        <nav id="main-nav">
            <h3>CE</h3>
            <ul>
                <li>about</li>
                <li>projects</li>
                <li>contact</li>
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
