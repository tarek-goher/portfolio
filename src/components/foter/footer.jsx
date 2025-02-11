import React from "react";
import '../foter/footer.css'

function Footer() {
  return (
    <footer className="flex">
      <ul  className="flex">
      <li>
              <a href="">About</a>
            </li>
            <li>
              <a href="">Projects</a>
            </li>
            <li>
              <a href="">Speaking</a>
            </li>
            <li>
              <a href="">Uses</a>
            </li>
      </ul>
      <p>"Front-End Developer | HTML, CSS, JS, Bootstrap, React, Material UI.</p>
    </footer>
  );
}

export default Footer;
