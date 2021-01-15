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

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />

        <Main />

        <section className="about-me-section" id="about-me-section">
          <h2 className="music-section-header">About</h2>

          <div className="portfolio-grid">
            <AboutMe
              image="./Assets/me.jpg"
              alt="School"
              id="picture-of-me"
              paragraphID="school-paragraph"
              topic="Being highly driven in a creative sense, I focused more on alternative forms of education during my main highschool career. As a result, I ended up moving school to Richard Pfaff High School to finish my studies and earn my diploma."
            />
            <AboutMe
              image="./Assets/Cydcor-why-door-to-door-sales-scaled.jpeg"
              alt="Door to door"
              id="door-to-door"
              paraID="post-school-paragraph"
              topic="After graduating from highschool, I was determined to learn as
              much about myself as I could before continuing with my
              studies. During this time I did every odd job imaginable,
              ranging from door to door sales to supervising a toy store."
              continueTopic="This time in my life was incredibly beneficial, and I
              believe I gained people skills that are highly adaptable and
              infinitely useful for what was to come when I started in the
              restaurant industry."
            />
            <AboutMe
              image="./Assets/20180628_173038.jpg"
              alt="Grounded charcut board"
              id="charcut-board"
              paragraphID="restaurant-paragraph"
              topic="Starting as a dishwasher at Grounded Restaurant, I
              quickly moved up within a year to part time chef. From there I
              had the time of my life in a plethora of different restaurant
              environments, gaining culinary skills in both fine dining and
              uncommon types of fast food alike."
            />
            <AboutMe
              image="./Assets/hat.png"
              alt="Grad Hat"
              id="grad-hat"
              paragraphID="post-restaurant-paragraph"
              topic="As much as I loved the work and excelled within the food
              industry, there came a time when I realized that I had a larger
              dream to strive for, and went back to school for web development."
            />
            <AboutMe
              image="./Assets/music.jpg"
              alt="Music Note"
              id="music-note"
              paragraphID="music-paragraph"
              topic="I have always been an avid musician, starting with classical
              violin at age 6. After a year of violin I wanted to switch to
              guitar, so I found a teacher and played both classical and
              regular acoustic style music for roughly 12 years."
              continueTopic="During this time I decided to start writing my own music, and
              still do to this day."
            />
            <div></div>
          </div>
        </section>

        <section id="projects" className="portfolio-section">
          <h2 className="portfolio-section-header">Portfolio</h2>
          <div className="portfolio-grid">
            <Projects
              link="https://github.com/LouisYS-Carleton/Resume"
              image="./Assets/Resume/Screen Shot 2020-12-03 at 2.30.44 PM.png"
              alt="Current resume"
              title="Resume"
              value="This is an up-to-date version of my resume, including a small handful of my previous jobs."
            />
            <Projects
              link="https://louisys-carleton.github.io/Random-Password-Generator/"
              image="./Assets/Screen Shot 2020-10-04 at 10.48.43 PM.png"
              alt="Password Generator"
              title="Password Generator"
              value="Allows the user to select their desired special characters and
              will put out a randomly generated password according to what
              they have selected."
            />
            <Projects
              link="https://louisys-carleton.github.io/stock-buddy/"
              image="./Assets/stockbuddy-screenshot.png"
              alt="Stockbuddy"
              title="Stockbuddy"
              value="Helps new users access the stock market in a simple,
              aesthetically pleasing way. Can view, add, and inspect various
              articals/info about a certain stock."
            />
            <Projects
              link="https://game-helper.herokuapp.com/"
              image="./Assets/goodgames.png"
              alt="Good Games"
              title="Good Games"
              value="A personal video game organizer, for gamers and/or
              streamers. View upcoming, current, and owned games all in one
              convenient location."
            />
            <Projects
              link="https://github.com/LouisYS-Carleton/Employee-Tracker"
              image="./Assets/employee_tracker.png"
              alt="Employee Tracker"
              title="Employee Tracker"
              value="An app to help business' keep track of their employees,
              managers, etc. Update the employees role, department, salary, and more!"
            />
            <Projects
              link="https://note-taker-carletonu.herokuapp.com/"
              image="./Assets/note_taker.png"
              alt="Note Taker"
              title="Note Taker"
              value="Add, delete, and update your personal memos. Use the Note Taker app to organize yourself throughout your day to day."
            />
          </div>

          <h3>Github Links</h3>
          <div
            className="main-gallery js-flickity"
            data-flickity-options='{"cellAlign": "left", "contain": true}'
          >
            <GithubLinks
              title="Resume"
              link="https://github.com/LouisYS-Carleton/Resume"
            />
            <GithubLinks
              title="Password Generator"
              link="https://github.com/LouisYS-Carleton/Random-Password-Generator"
            />
            <GithubLinks
              title="Stockbuddy"
              link="https://github.com/LouisYS-Carleton/stock-buddy"
            />
            <GithubLinks
              title="Good Games"
              link="https://github.com/LouisYS-Carleton/Game-Helper"
            />
            <GithubLinks
              title="Employee Tracker"
              link="https://github.com/LouisYS-Carleton/Employee-Tracker"
            />
            <GithubLinks
              title="Note Taker"
              link="https://github.com/LouisYS-Carleton/Note_Taker"
            />
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

        <section className="song-section">
          <h2 className="music-section-header">Music</h2>
          <div
            className="main-gallery js-flickity"
            data-flickity-options='{"cellAlign": "left", "contain": true}'
          >
            <MusicList
              title="who i am"
              link="https://www.youtube.com/embed/RMOBUoxuYUY"
            />
            <MusicList
              title="changes"
              link="https://www.youtube.com/embed/9XJ7_-aMEEI"
            />
            <MusicList
              title="blissful eyes"
              link="https://www.youtube.com/embed/DHygzx7QlCQ"
            />
            <MusicList
              title="take my time"
              link="https://www.youtube.com/embed/dncvpZ0nWBE"
            />
            <MusicList
              title="Hey mama"
              link="https://www.youtube.com/embed/WKBADNFkonI"
            />
            <MusicList
              title="a bit of nothing special"
              link="https://www.youtube.com/embed/7ESfQ1fjt9c"
            />
          </div>
        </section>

        <Contact />

        <Footer />
      </div>
    );
  }
}

export default App;
