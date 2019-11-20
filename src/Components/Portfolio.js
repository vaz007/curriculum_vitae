import React, { Component } from "react";
import "../CSS/Portfolio.css";

import NeuralNetworkImg from "../Images/neuralnetwork.jpeg";
import LaneSegmentation from "../Images/laneSegment.jpg";
import Venom from "../Images/venom.jpeg";
import Mern from '../Images/mern.png' 
import ToDo from '../Images/toDoList.jfif'
import Android from '../Images/android.png'

export class Portfolio extends Component {
  render() {
    return (
      <div className="row projects" id="projects">
        <div className="col-sm-12 col-md-12 col-lg-3">
          <h1>
            <span>Projects</span>
          </h1>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3">
          <div className="card box shadow">
            <img
              className="card-img"
              alt="Card"
              src={NeuralNetworkImg}
              style={{ minHeight: "250px" }}
              
            />
            <div className="card-img-overlay">
              <h5 className="card-title" style={{ color: "white" }}>
                Sensitivity to neural network{" "}
              </h5>
              <p className="card-text" style={{ color: "white" }}>
                Created a Deep neural network (DNN), and applied sensitivity a
                pruning technique which reduced the size of the net by 5% with
                improving training time by 10 to 20 seconds in every 50 epochs.
              </p>
            </div>
          </div>

          <div className="card box shadow">
            <img
              className="card-img"
              src={LaneSegmentation}
              style={{ maxHeight: "250px" }}
              alt="Card"
            />
            <div className="card-img-overlay">
              <h5 className="card-title" style={{ color: "white" }}>
                Lane Segmentation
              </h5>
              <p className="card-text" style={{ color: "white" }}>
                Created a Convolutional neural network (CNN), for a computer
                vision project and used CULane dataset. With this as a team
                project we created a report as well as submitted our findings to
                the university.
              </p>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-6 col-lg-3">
        
          <div className="card box shadow">
            <img
              className="card-img"
              src={Venom}
              style={{ minHeight: "250px" }}
              alt="Card"
            />
            <div className="card-img-overlay">
              <h5 className="card-title" style={{ color: "white" }}>
                Venom
              </h5>
              <p className="card-text" style={{ color: "white" }}>
                A fun and light android game created to show the knowledge and
                expertise in the field of android development.
              </p>
            </div>
          </div>

          <div className="card box shadow">
            <img
              className="card-img"
              src={Mern}
              style={{ minHeight: "250px" }}
              alt="Card"
            />
            <div className="card-img-overlay">
              <h5 className="card-title" style={{ color: "white" }}>
              MERN stack Projects
              </h5>
              <p className="card-text" style={{ color: "white" }}>
              I have created multiple mern stack projects. This was made in focus to get a good grip on MERN stack few of the projects are To Do List, my personal cv website. 
              </p>
            </div>
          </div>



        </div>

        <div className="col-sm-12 col-md-6 col-lg-3">
  
          <div className="card box shadow">
            <img
              className="card-img"
              src={ToDo}
              style={{ maxHeight: "250px" }}
              alt="Card"
            />
            <div className="card-img-overlay">
              <h5 className="card-title" style={{ color: "white" }}>
             To Do List
              </h5>
              <p className="card-text" style={{ color: "white" }}>
              Created an Android app while learning Java for android development. 
              </p>
            </div>
          </div>

          <div className="card box shadow">
            <img
              className="card-img"
              src={Android}
              style={{ minHeight: "250px" }}
              alt="Card"
            />
            <div className="card-img-overlay">
              <h5 className="card-title" style={{ color: "white" }}>
             Wifi & Cell Sniffer
              </h5>
              <p className="card-text" style={{ color: "white" }}>
              The android app helps us to scan all the wifi and cell points within the radius. Further, it keeps track of location and sends all the data to the database in every 5 seconds.

              </p>
            </div>
          </div>

        </div>

      </div>
    );
  }
}

export default Portfolio;
