import React, { Component } from "react";
import "../CSS/Portfolio.css";

export class Portfolio extends Component {
  render() {
    return (
      
      <div class="row projects" id="projects">
        <div class="col-sm-12 col-md-12 col-lg-3">
          <h1>
            <span>Projects</span>
          </h1>
        </div>

          <div className="col-sm-3 col-md-6 col-lg-2">
            <div className="card box shadow">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-6 col-lg-2">
          <div className="card box shadow">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Project 2</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-6 col-lg-2">
          <div className="card box shadow">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Project 3</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>

          <div className="col-sm-3 col-md-6 col-lg-2">
          <div className="card box shadow">
              <img src="..." className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Project 4</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
              </div>
            </div>
          </div>
        </div>
     
    );
  }
}

export default Portfolio;
