import React from "react";

class Projects extends React.Component {
  render() {
    return (
      <a
        href={this.props.project.link}
        target="_blank"
        className="project project-tile"
        rel="noreferrer"
      >
        <img
          src={this.props.project.image}
          alt={this.props.project.alt}
          className="portfolio-pictures"
        />
        <h6 className="project-title">
          <span className="code">&lt;</span>
          {this.props.project.title}
          <span className="code">&#47;&gt;</span>
          <p>
            <br />
            {this.props.project.value}
          </p>
        </h6>
      </a>
    );
  }
}

export default Projects;
