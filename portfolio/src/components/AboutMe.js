import React from "react";

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.aboutme.image}
          alt={this.props.aboutme.alt}
          id={this.props.aboutme.id}
          className="portfolio-pictures"
        />
        <h6 className="project-title">
          <p
            id={this.props.aboutme.paragraphID}
            className="about-me-paragraphs"
          >
            {this.props.aboutme.topic}
            <br />
            {this.props.aboutme.continueTopic}
          </p>
        </h6>
      </div>
    );
  }
}

export default AboutMe;
