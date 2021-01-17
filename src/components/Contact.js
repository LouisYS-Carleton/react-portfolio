import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <section id="contact" className="contact-section">
        <h2 className="contact-section-header">Contact</h2>
        <aside>
          <p>
            {" "}
            I would <em>love</em> to hear from you!{" "}
          </p>
          <p>
            Please use the{" "}
            <b>
              <em>Contact Form</em>
            </b>
            to send me a message, or use one of my social media links below.
            <br />
            <br />
            <b>Email:</b> louisyacksmith@hotmail.com
            <br />
            <b>Phone:</b> Currently unavailable
          </p>
        </aside>
        <form
          id="gform"
          method="POST"
          className="pure-form pure-form-stacked"
          action=""
          style={{ padding: "20px" }}
        >
          <fieldset className="pure-group">
            <label htmlFor="name">Name: </label>
            <input id="name" name="name" placeholder="Hello!" />
          </fieldset>

          <fieldset className="pure-group">
            <label htmlFor="message">Message: </label>
            <textarea
              id="message"
              name="message"
              rows="10"
              placeholder="What's on your mind?"
            ></textarea>
          </fieldset>

          <fieldset className="pure-group">
            <label htmlFor="email">
              <em>Your</em> Email Address:
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value=""
              required
              placeholder="your.name@email.com"
            />
            <span id="email-invalid" style={{ visibility: "hidden" }}>
              Must be a valid email address
            </span>
          </fieldset>

          <fieldset className="pure-group">
            <label htmlFor="color">Favourite Color: </label>
            <input id="color" name="color" placeholder="green" />
          </fieldset>

          <button className="button-success pure-button button-xlarge">
            <i className="fa fa-paper-plane"></i>&nbsp;Send
          </button>
        </form>
        <div style={{ display: "none" }} id="thankyou_message">
          <h2>
            <em>Thanks</em> for contacting me! I'll get back to you soon!
          </h2>
        </div>

        <div className="contact-links">
          <a
            href="https://www.facebook.com/LouisYacksmith/"
            className="btn contact-details"
          >
            <i className="fab fa-facebook-square"></i> Facebook
          </a>
          <a
            id="profile-link"
            href="https://github.com/LouisYS-Carleton"
            target="_blank"
            className="btn contact-details"
            rel="noreferrer"
          >
            <i className="fab fa-github"></i>
            GitHub
          </a>
          <a
            id="profile-link"
            href="https://www.linkedin.com/in/louis-yacksmith-2a06321b2/"
            target="_blank"
            rel="noreferrer"
            className="btn contact-details"
          >
            <i className="fab fa-github"></i>
            Linkedin
          </a>
        </div>
      </section>
    );
  }
}

export default Contact;
