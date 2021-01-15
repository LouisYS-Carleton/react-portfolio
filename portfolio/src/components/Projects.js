import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <a
        href={this.props.link}
        target="_blank"
        className="project project-tile"
        rel="noreferrer"
      >
        <img
          src={this.props.image}
          alt={this.props.alt}
          className="portfolio-pictures"
        />
        <h6 className="project-title">
          <span className="code">&lt;</span>
          {this.props.title}
          <span className="code">&#47;&gt;</span>
          <p>
            <br />
            {this.props.value}
          </p>
        </h6>
      </a>
    );
  }
}

export default Projects;
