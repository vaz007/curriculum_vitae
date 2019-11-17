import React, { Component } from "react";
import Nav from './Navbar';
import About from './About'
import Education from './EducationAndWork'
import Portfolio from './Portfolio'
export class Resume extends Component {
  render() {
    return (
      <div>
         <Nav /> 
        <About />
        <Education />
        <Portfolio />
       
      </div>
    );
  }
}

export default Resume;
