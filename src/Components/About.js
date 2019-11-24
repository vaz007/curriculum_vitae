import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
// import AboutImage from "../Images/AboutPage.png";
import "../CSS/About.css";
import Resume from "../Assets/ANKUR_VAZIRANI.pdf";

export class About extends Component {
  render() {
    return (
      <div className="row about" id="about">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <h1>
            <span>About Me</span>
          </h1>
        </div>
        <div className="col-sm-12 col-md-9 col-lg-9 text-left">
          <ScrollAnimation animateIn="bounceInRight" animateOut="bounceInRight">
            <h3>
              <span>Full Stack Developer</span>
            </h3>
            <p className="details">
              I am experienced Software Engineer with a demonstrated history of working in the
              information technology and services industry. Skilled in MERN Stack, Android
              Development, Bootstrap, Artificial Neural Networks, HTML5, and
              Python (Programming Language). Strong engineering professional
              with a Master of Computer Applications - MCA focused in Artificial
              Intelligence from The Australian National University.
            </p>

            {/* Button Code  */}

            <a href={Resume} className="button">
              Download Resume
            </a>

            {/* Ends Here */}
          </ScrollAnimation>
        </div>

        {/* <div className="col-sm-4 col-md-6 col-lg-4">
          <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeInLeft">
            <img
              src={AboutImage}
              style={{ height: "320px", width: "320px" }}
              className="rounded mx-auto d-block"
              alt="Cinque Terre"
            ></img>
          </ScrollAnimation>
        </div> */}
      </div>
    );
  }
}
export default About;
