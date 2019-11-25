import React, { Component } from "react";
import ScrollAnimation from "react-animate-on-scroll";
import "../CSS/Eandw.css";

import MainHeader from "../ChildrenComponents/header";
import SkillsFunction from "../ChildrenComponents/skillsFunction";

const skills = require("../Data/data");
const skillData = skills[3].skills;



export class Skills extends Component {
  render() {
    return (
      <div className="row about" id="about">
        <MainHeader mainHeader={skillData.h1} />

        <div className="col-sm-4 col-md-8 col-lg-5">
          <SkillsFunction skillName={skillData.html} style={{width: "85%" }} />
          <SkillsFunction skillName={skillData.js} style={{ width: "85%" }} />
          <SkillsFunction skillName={skillData.mern} style={{ width: "85%" }} />
          <SkillsFunction skillName={skillData.python} style={{ width: "75%" }} />
          <SkillsFunction skillName={skillData.android} style={{ width: "65%" }} />
        
        </div>
      </div>
    );
  }
}

export default Skills;
