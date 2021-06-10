/************************ CONTACT ************************/
/*========== PACKAGES ==========*/

import 'bootstrap/dist/css/bootstrap.min.css';

/*========= COMPONENTS =========*/

/*========= MAIN APP ===========*/

function Contact() {
  return (
      <div id="contact-container">
        <h3>get in touch</h3>
        <p>Email me, ping me, if you wanna reach me - if you wanna dm me, that's okay.</p>
        <address>cheisentrout@gmail.com</address>
        <ul>
            <li>
                <a href="https://www.linkedin.com/in/cheisentrout/" target="https://www.linkedin.com/in/cheisentrout/"><i class="fab fa-linkedin"></i></a>
            </li>
            <li>
                <a href="https://github.com/cheisentrout" target="https://github.com/cheisentrout"><i class="fab fa-github-square"></i></a>
            </li>
            <li>
                <a href="https://www.instagram.com/clareclarebobear/" target="https://www.instagram.com/clareclarebobear/"><i class="fab fa-instagram"></i></a>
            </li>
        </ul>
      </div>
  );
}

/*=========== EXPORTS ==========*/

export default Contact;
