import React from "react";
import arrow from "../Assets/arrow.png";

class Main extends React.Component {
  render() {
    return (
      <section id="welcome-section" className="welcome-section">
        <h1>Louis Yacksmith's Portfolio</h1>
        <p>Web Developer</p>
        <br />
        <br />
        <br />
        <br />
        <a href="#about-me-section">
          <img
            src={arrow}
            alt="arrow"
            style={{ height: "50px", width: "50px" }}
          />
        </a>
      </section>
    );
  }
}

export default Main;
