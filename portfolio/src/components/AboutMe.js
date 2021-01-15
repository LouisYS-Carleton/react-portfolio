import React from "react";

class AboutMe extends React.Component {
  render() {
    return (
      <div>
        <img
          src={this.props.image}
          alt={this.props.alt}
          id={this.props.id}
          className="portfolio-pictures"
        />
        <h6 className="project-title">
          <p id={this.props.paragraphID} className="about-me-paragraphs">
            {this.props.topic}
            <br />
            {this.props.continueTopic}
          </p>
        </h6>
      </div>
    );
  }
}

export default AboutMe;
