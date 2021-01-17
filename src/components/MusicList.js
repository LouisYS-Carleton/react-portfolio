import React from "react";

class MusicList extends React.Component {
  render() {
    return (
      <div className="gallery-cell">
        <iframe
          className="songs"
          title={this.props.music.title}
          src={this.props.music.link}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default MusicList;
