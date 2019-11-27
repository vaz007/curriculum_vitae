import React, { Component } from "react";
import "../CSS/Portfolio.css";

import NeuralNetworkImg from "../Images/neuralnetwork.jpeg";
import LaneSegmentation from "../Images/laneSegment.jpg";
import Venom from "../Images/venom.jpeg";
import Mern from "../Images/mern.png";
import ToDo from "../Images/toDoList.jfif";
import Android from "../Images/android.png";

import ProjectFunction from "../ChildrenComponents/projectFunction";
const projects = require("../Data/data");

const projectsDataH1 = projects[5].projects.h1;
const NeuralNetworkData = projects[5].projects.data[0].NeuralNetwork;
const LaneSegmentationData = projects[5].projects.data[1].laneSegmentation;
const VenomData = projects[5].projects.data[2].venom;
const MERNData = projects[5].projects.data[3].mernStack;
const ToDoData = projects[5].projects.data[4].toDoList;
const wifiCellScanData = projects[5].projects.data[5].wifiCellScan;

export class Portfolio extends Component {
  render() {
    return (
      <div class="row projects" id="projects">
        <div className="col-sm-12 col-md-12 col-lg-3" >
          <h1>
            <span>{projectsDataH1}</span>
          </h1>
        </div>
        <div className="col-sm-3 col-md-6 col-lg-3">
          <ProjectFunction
            title={NeuralNetworkData.title}
            image={NeuralNetworkImg}
            details={NeuralNetworkData.details}
          />
          <ProjectFunction
            title={LaneSegmentationData.title}
            image={LaneSegmentation}
            details={LaneSegmentationData.details}
          />
        </div>

        <div class="col-sm-3 col-md-6 col-lg-3">
          <ProjectFunction
            title={VenomData.title}
            image={Venom}
            details={VenomData.details}
          />

          <ProjectFunction
            title={MERNData.title}
            image={Mern}
            details={MERNData.details}
          />
        </div>

        <div class="col-sm-3 col-md-6 col-lg-3">
          <ProjectFunction
            title={ToDoData.title}
            image={ToDo}
            details={ToDoData.details}
          />

          <ProjectFunction
            title={wifiCellScanData.title}
            image={Android}
            details={wifiCellScanData.details}
          />
        </div>
      </div>
    );
  }
}

export default Portfolio;
