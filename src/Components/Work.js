import React, { Component } from "react";
import "../CSS/Eandw.css";
import MainHeader from "../ChildrenComponents/header";

import WorkFunction from "../ChildrenComponents/workFunction";

const work = require("../Data/data");
const workDataH1 = work[2].work.h1;
const Adapt = work[2].work.data[0].Adapt;
const Aeon = work[2].work.data[1].Aeon;
const MDS = work[2].work.data[2].MDS;
const MCGM = work[2].work.data[3].MCGM;

export class Work extends Component {
  render() {
    console.log(work[2].work.data[0].Adapt);

    return (
      <div className="row work" id="resume">
        <MainHeader mainHeader={workDataH1} />
        <div className="col-sm-12 col-md-9 col-lg-9 text-left">
          <WorkFunction
            heading3={Adapt.heading}
            date={Adapt.date}
            location={Adapt.location}
            info={Adapt.info}
            details1={Adapt.details1}
            details2={Adapt.details2}
            details3={Adapt.details3}
          />

          <WorkFunction
            heading3={Aeon.heading}
            date={Aeon.date}
            location={Aeon.location}
            info={Aeon.info}
            details1={Aeon.details1}
          />

          <WorkFunction
            heading3={MDS.heading}
            date={MDS.date}
            location={MDS.location}
            info={MDS.info}
            details1={MDS.details1}
          />

          <WorkFunction
            heading3={MCGM.heading}
            date={MCGM.date}
            location={MCGM.location}
            info={MCGM.info}
            details1={MCGM.details1}
          />
        </div>
      </div>
    );
  }
}

export default Work;
