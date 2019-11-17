import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import AboutImage from "../Images/AboutPage.png";
import '../CSS/About.css'
export class About extends Component {
  render() {
    return (
      <div class="container" style={{ marginTop: "2rem" }}>
        <h1>About Me</h1>
        <div class="row">
          <div
            class="col-sm-4 col-md-6 col-lg-4"
            style={{ marginTop: "5rem", height: "20rem" }}
          >
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <h1>Ankur Vazirani</h1>
              <h2>Full Stack Developer</h2>
              <p>
                I am a full stack developer profeciency in building web apps
                using MongoDB Express Nodejs and React (MERN) stack. I have
                completed my Masters in Computing with specialisation in
                Artificial Intelligence from Australian National University.
              </p>

{/* Button COde  */}


<a href="/" class="button">Download Resume</a>

{/* Ends Here */}
            </ScrollAnimation>
          </div>

          <div
            class="col-sm-4 col-md-6 col-lg-4"
            style={{ marginTop: "5rem", height: "20rem"}}
          >
            <ScrollAnimation animateIn="fadeInLeft" animateOut="fadeOutRight">
              <img
                src={AboutImage}
                style={{ height: "320px", width: "320px" }}
                class="rounded mx-auto d-block"
                alt="Cinque Terre"
              ></img>
            </ScrollAnimation>
          </div>

          <div
            class="col-sm-4 col-md-12 col-lg-4"
            style={{ marginTop: "3rem", height: "20rem" }}
          >
            <ScrollAnimation
              animateIn="bounceInRight"
              animateOut="bounceOutLeft"
            >
              <h1> Skills </h1>
              <h6>HTML CSS 75%</h6>
              <div class="progress" style ={{ height:"10px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%", backgroundColor: "#333" }}
                ></div>
              </div>

              <br />

              <h6>Javascript 85%</h6>
              <div class="progress" style ={{ height:"10px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="85"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "85%", backgroundColor: "#333"}}
                ></div>
              </div>
              <br />


              <h6>MERN Stack 85%</h6>
              <div class="progress" style ={{ height:"10px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "85%", backgroundColor: "#333" }}
                ></div>
              </div>
              <br />

              <h6>Python 75%</h6>
              <div class="progress" style ={{ height:"10px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "75%", backgroundColor: "#333" }}
                ></div>
              </div>
              <br />

              <h6>Android (Java) 65%</h6>
              <div class="progress" style ={{ height:"10px" }}>
                <div
                  class="progress-bar"
                  role="progressbar"
                  aria-valuenow="25"
                  aria-valuemin="0"
                  aria-valuemax="100"
                  style={{ width: "65%", backgroundColor: "#333" }}
                ></div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    );
  }
}
export default About;
