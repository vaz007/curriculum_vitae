import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import AboutImage from "../Images/AboutPage.png";
import "../CSS/About.css";
export class About extends Component {
  render() {
    return (
      <div className="row about" id="about">
        <div className="col-sm-12 col-md-12 col-lg-3">
          <h1>
            <span>About Me</span>
          </h1>
        </div>
        <div className="col-sm-4 col-md-6 col-lg-4">
          <ScrollAnimation animateIn="bounceInRight" animateOut="bounceInRight">
            <h1>
              <span>Ankur Vazirani</span>
            </h1>
            <h5>
              <span>Full Stack Developer</span>
            </h5>
            <p className="text-left" style={{ marginLeft: "4rem" }}>
              I am a full stack developer proficiency in building web apps using
              MongoDB Express Nodejs and React (MERN) stack. I have completed my
              Masters in Computing with specialisation in Artificial
              Intelligence from the Australian National University.
            </p>

            {/* Button COde  */}

            <a href="/" className="button">
              Download Resume
            </a>

            {/* Ends Here */}
          </ScrollAnimation>
        </div>

        <div className="col-sm-4 col-md-6 col-lg-4">
          <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeInLeft">
            <img
              src={AboutImage}
              style={{ height: "320px", width: "320px" }}
              className="rounded mx-auto d-block"
              alt="Cinque Terre"
            ></img>
          </ScrollAnimation>
        </div>
      </div>
    );
  }
}
export default About;
