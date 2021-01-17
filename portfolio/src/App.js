import React from "react";
import "./App.css";

import MusicList from "./components/MusicList";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import GithubLinks from "./components/GithubLinks";

import ProjectStore from "./utils/ProjectStore";
import AboutMeStore from "./utils/AboutMeStore";
import GithubLinksStore from "./utils/GithubLinksStore";
import MusicListStore from "./utils/MusicListStore";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* Navbar */}
        <Navbar />

        {/* Main */}
        <Main />

        {/* About Me */}
        <section className="about-me-section" id="about-me-id">
          <h2 className="music-section-header">About</h2>

          <div className="portfolio-grid">
            {AboutMeStore.map((aboutme) => (
              <AboutMe aboutme={aboutme} />
            ))}
            <div></div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="portfolio-section">
          <h2 className="portfolio-section-header">Portfolio</h2>
          <div className="portfolio-grid">
            {ProjectStore.map((project) => (
              <Projects project={project} />
            ))}
          </div>

          <h3>Github Links</h3>
          <div
            className="main-gallery js-flickity"
            data-flickity-options='{"cellAlign": "left", "contain": true}'
          >
            {GithubLinksStore.map((githublinks) => (
              <GithubLinks githublinks={githublinks} />
            ))}
          </div>
          <a
            href="https://github.com/LouisYS-Carleton?tab=repositories"
            className="btn btn-show-all"
            target="_blank"
            rel="noreferrer"
          >
            Show all
            <i className="fas fa-chevron-right"></i>
          </a>
        </section>

        {/* Music */}
        <section className="song-section" id="song-section">
          <h2 className="music-section-header">Music</h2>
          <div
            className="main-gallery js-flickity"
            data-flickity-options='{"cellAlign": "left", "contain": true}'
          >
            {MusicListStore.map((music) => (
              <MusicList music={music} />
            ))}
          </div>
        </section>

        {/* Contact */}
        <Contact />

        {/* Footer */}
        <Footer />
      </div>
    );
  }
}

export default App;
