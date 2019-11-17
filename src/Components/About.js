import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import AboutImage from "../Images/AboutPage.png";
import "../CSS/About.css";
export class About extends Component {
  render() {
    return (
      
        <div class="row about" id="about">
          <div class="col-sm-12 col-md-12 col-lg-3">
            <h1>
              <span>About Me</span>
            </h1>
          </div>
          <div class="col-sm-4 col-md-6 col-lg-4">
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceInRight"
            >
              <h1>
                <span>Ankur Vazirani</span>
              </h1>
              <h2>Full Stack Developer</h2>
              <p>
                I am a full stack developer profeciency in building web apps
                using MongoDB Express Nodejs and React (MERN) stack. I have
                completed my Masters in Computing with specialisation in
                Artificial Intelligence from Australian National University.
              </p>

              {/* Button COde  */}

              <a href="/" class="button">
                Download Resume
              </a>

              {/* Ends Here */}
            </ScrollAnimation>
          </div>

          <div
            class="col-sm-4 col-md-6 col-lg-4"
           
          >
            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeInLeft">
              <img
                src={AboutImage}
                style={{ height: "320px", width: "320px" }}
                class="rounded mx-auto d-block"
                alt="Cinque Terre"
              ></img>
            </ScrollAnimation>
          </div>
        </div>

    );
  }
}
export default About;
