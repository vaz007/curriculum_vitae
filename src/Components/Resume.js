import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import Nav from "./Navbar";
import About from "./About";
import Education from "./Education";
import Skills from "./Skills";
import Work from "./Work";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

// Add data to one file which will ease the imports 
// var k = require ('../Data/data');
// const about = k[0]  
// console.log(about.about.h1);


export class Resume extends Component {
  render() {
    return (
      <div>
        <Nav />
        <About />
        <Skills />
        <Education />
        <Work />
        <Portfolio />
        <Contact />

        <BrowserRouter>
          <Route path="/about" component={About} />
          <Route path="/skills" component={Skills} />
          <Route path="/education" component={Education} />
          <Route path="/work" component={Work} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </BrowserRouter>
      </div>
    );
  }
}

export default Resume;
