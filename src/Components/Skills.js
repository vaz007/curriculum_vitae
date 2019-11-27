import React, { Component } from "react";
import "../CSS/Eandw.css";
import {ProgressBar} from 'react-bootstrap'

import MainHeader from "../ChildrenComponents/header";

const skills = require("../Data/data");
const skillData = skills[3].skills;



export class Skills extends Component {
  render() {
    return (
      <div className="row education" id="resume">
        <MainHeader mainHeader={skillData.h1} />
        <div className="col-sm-5 col-md-8 col-lg-5">
         <h5><span>{skillData.html}</span></h5>
         <ProgressBar now={60} style = {{marginBottom : "10px", height : "10px"}} />
         <h5><span>{skillData.js}</span></h5>
         <ProgressBar now={85} style = {{marginBottom : "10px",  height : "10px"}} />
         <h5><span>{skillData.mern}</span></h5>
         <ProgressBar now={85}  style = {{marginBottom : "10px",  height : "10px"}}/>
         <h5><span>{skillData.python}</span></h5>
         <ProgressBar now={75} style = {{marginBottom : "10px",  height : "10px"}}/>
         <h5><span>{skillData.android}</span></h5>
         <ProgressBar now={65} style = {{marginBottom : "10px",  height : "10px"}}/>

        </div>
      </div>
    );
  }
}

export default Skills;
