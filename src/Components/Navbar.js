import React, { Component } from "react";
import ankurThumbNail from "../Images/ankurThumbNail.jfif";
import "../CSS/Navbar.css";
import Scroll from "./scrollBottom";
import Typewriter from "typewriter-effect";

import About from './About'

export class Navbar extends Component {
  render() {
    return (
      <div>
        <head>
          <link rel="stylesheet" src="dist/css/jquery.animatedheadline.css" />
        </head>
        <div class="cover">
          <nav class="navbar navbar-expand-lg navbar-light fixed-top justify-content-center">
            <a class="navbar-brand" href="/" style = {{color : "white"}}>
              Ankur
              <img
                src={ankurThumbNail}
                class="img-thumbnail rounded-circle"
                alt="AV"
                style={{ marginLeft: "1rem", width: "3rem", height: "3rem" }}
              ></img>
            </a>

            <button
              class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="/">
                    Home <span class="sr-only">(current)</span>
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    About
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Portfolio
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Skills
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
{/* The Below code is for typewriter font text  */}
        <div class="text-block">
          <Typewriter
            options={{
              strings: ["Hi I am Ankur Vazirani ", "Full Stack Developer"],
              autoStart: true,
              loop: true
            }}
          />
        </div>
{/* Text-block code ends here  */}

        <div>
          <Scroll />
        </div>

      </div>
    );
  }
}

export default Navbar;
