import React, { Component } from "react";
import Nav from './Navbar';
import About from './About'
import Education from './Education'
import Skills from './Skills'
import Work from './Work'
import Portfolio from './Portfolio'
import Contact from './Contact'
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
       
      </div>
    );
  }
}

export default Resume;
