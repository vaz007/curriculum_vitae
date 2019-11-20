import React, { Component } from "react";
import ankurThumbNail from "../Images/ankurThumbNail.jfif";
import "../CSS/Navbar.css";

import "../CSS/scrollBottom.css";
import Typewriter from "typewriter-effect";


export class Navbar extends Component {
  render() {
    return (
      <div className = "cover">   

        <nav className="navbar navbar-expand-lg navbar-light fixed-top justify-content-center">
          <a className="navbar-brand" href="/" style={{ color: "blue" }}>
            Ankur
            <img
              src={ankurThumbNail}
              className="img-thumbnail rounded-circle"
              alt="AV"
              style={{ marginLeft: "1rem", width: "3rem", height: "3rem" }}
            ></img>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Skills
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
        {/* The Below code is for typewriter font text  */}

        <div className="text-block">
          <Typewriter
            options={{
              strings: ["I am Ankur Vazirani", "Full Stack Developer", "AI specialist", ],
              autoStart: true,
              loop: true
            }}
          />
        </div>
        <div className="text-block-heading">
          <h5>
            <span>Welcome to my website</span>
          </h5>
        </div>
        {/* Text-block code ends here  */}
        {/* Scroll Bottom Icon starts here refer to scrollBottom.css file */}
        <div className="arrow">
          <a href="./">
            <span></span>
          </a>
          <a href="/">
            <span></span>
          </a>
          <a href="/">
            <span></span>
          </a>
        </div>
        {/* Scroll Bottom Ends Here */}
      </div>
    );
  }
}

export default Navbar;
