import React from "react";

class GithubLinks extends React.Component {
  render() {
    return (
      <div className="gallery-cell" style={{ padding: "20px", margin: "10px" }}>
        <a
          href={this.props.githublinks.link}
          style={{
            border: "thin solid black",
            padding: "10px",
            borderRadius: "20px",
            backgroundColor: "black",
          }}
        >
          {this.props.githublinks.title}
        </a>
      </div>
    );
  }
}

export default GithubLinks;
<GithubLinks title="" link="" />;
