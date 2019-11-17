import React, { Component } from "react";
import "../CSS/Eandw.css";
export class EducationAndWork extends Component {
  render() {
    return (
       <div class="row education" id ="resume">
            <div class="col-sm-12 col-md-3 col-lg-3">
              <h1>
                <span>Education</span>
              </h1>
            </div>
            <div class="col-sm-12 col-md-9 col-lg-9 text-left">
              <h3>Australian National University</h3>
              <p class="info">
                Masters of Computing with Specialisation in Artificial
                Intelligence <span>&bull;</span>{" "}
                <em class="date">November 2019</em>
              </p>
              <p className="details">
                Completed my Masters with major focus in Artificial Intelligence
                and gained knowledge in the field of software development
              </p>

              <h3>IBSAR</h3>
              <p class="info">
                Bachelors of Computing with Majors in Software Development{" "}
                <span>&bull;</span> <em class="date">November 2019</em>
              </p>
              <p className="details">
                Completed my Masters with major focus in Artificial Intelligence
                and gained knowledge in the field of software development
              </p>
            </div>
          </div>

     
    );
  }
}

export default EducationAndWork;
