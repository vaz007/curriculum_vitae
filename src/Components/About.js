import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
// import AboutImage from "../Images/AboutPage.png";
import "../CSS/About.css";

import Resume from "../Assets/ANKUR_VAZIRANI.pdf";


import MainHeader from '../ChildrenComponents/header'




var data = require("../Data/data");
const aboutData = data[0];
// console.log(about.about.h1);

export class About extends Component {
  render() {
    return (
      <div className="row about" id="about">
        <MainHeader mainHeader = {aboutData.about.h1} />
        <div className="col-sm-12 col-md-9 col-lg-9 text-left">
            <h3>
              <span>{aboutData.about.h3}</span>
            </h3>
            <p className="details">{aboutData.about.p}</p>

            {/* Button Code  */}

            <a href={Resume} className="button">
              Download Resume
            </a>

            {/* Ends Here */}
        </div>
     </div>
    );
  }
}
export default About;
