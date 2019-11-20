import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../CSS/Eandw.css";
export class Skills extends Component {
  render() {
    return (
      <div className="row about" id="about">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <h1>
            <span>Skills</span>
          </h1>
        </div>
        <div className="col-sm-4 col-md-8 col-lg-5">
          <ScrollAnimation animateIn="bounceInRight" animateOut="bounceOutLeft">
            <h6>HTML CSS 75%</h6>
            <div className="progress" style={{ height: "10px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%", backgroundColor: "#333" }}
              ></div>
            </div>

            <br />

            <h6>Javascript 85%</h6>
            <div className="progress" style={{ height: "10px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="85"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "85%", backgroundColor: "#333" }}
              ></div>
            </div>
            <br />

            <h6>MERN Stack 85%</h6>
            <div className="progress" style={{ height: "10px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "85%", backgroundColor: "#333" }}
              ></div>
            </div>
            <br />

            <h6>Python 75%</h6>
            <div className="progress" style={{ height: "10px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuenow="25"
                aria-valuemin="0"
                aria-valuemax="100"
                style={{ width: "75%", backgroundColor: "#333" }}
              ></div>
            </div>
            <br />

            <h6>Android (Java) 65%</h6>
            <div className="progress" style={{ height: "10px" }}>
              <div
                className="progress-bar"
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
    );
  }
}

export default Skills;
