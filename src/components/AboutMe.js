import React from "react";

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.aboutme.image}
          alt={this.props.aboutme.alt}
          id={this.props.aboutme.id}
          className="about-me-pictures"
        />
        <h6 className="project-title">
          <p
            id={this.props.aboutme.paragraphID}
            className="about-me-paragraphs"
          >
            {this.props.aboutme.topic}
            <br />
            <br />
            {this.props.aboutme.continueTopic}
            <br />
            <br />
            <br />
            {this.props.aboutme.skillsTitle}
            <br />
            {this.props.aboutme.skills}
          </p>
        </h6>
      </div>
    );
  }
}

export default AboutMe;
