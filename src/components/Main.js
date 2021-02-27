import React from "react";

class Main extends React.Component {
  render() {
    return (
      <section id="welcome-section" className="welcome-section">
        <h1>Louis Yacksmith's Portfolio</h1>
        <p>Full Stack Web Developer</p>
        <br />
        <br />
        <br />
        <br />
        <a href="#about-me-id">
          <img
            src="./Assets/arrow.png"
            alt=""
            style={{ height: "50px", width: "50px" }}
          />
        </a>
      </section>
    );
  }
}

export default Main;
