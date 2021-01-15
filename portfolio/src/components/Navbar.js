import React from "react";

class Navbar extends React.Component {
  render() {
    return (
      <nav id="navbar" className="nav">
        <ul className="nav-list">
          <li>
            <a href="#about-me-section">About</a>
          </li>
          <li>
            <a href="#projects">Portfolio</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navbar;
