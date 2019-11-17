import React, { Component } from "react";
import "../CSS/Portfolio.css";

export class Portfolio extends Component {
  render() {
    return (
      
        <div class="row projects" id = "projects">
          <div class="col-sm-12 col-md-3 col-lg-3">
            <h1>
              <span>Projects</span>
            </h1>
          </div>
          <div
            id="carouselExampleControls"
            class="carousel slide"
            data-ride="carousel"
          >
            <div className="container-fluid">
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-4 col-lg-2">
                      <div class="card">
                        <img src="/" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-2">
                      <div class="card">
                        <img src="/" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-4 col-lg-2">
                      <div class="card">
                        <img src="/" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-2">
                      <div class="card">
                        <img src="/" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="carousel-item">
                  <div className="row justify-content-center">
                    <div className="col-sm-12 col-md-4 col-lg-2">
                      <div class="card">
                        <img src="/" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="col-sm-12 col-md-4 col-lg-2">
                      <div class="card">
                        <img src="/" class="card-img-top" alt="..." />
                        <div class="card-body">
                          <p class="card-text">
                            Some quick example text to build on the card title
                            and make up the bulk of the card's content.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  class="carousel-control-prev"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleControls"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      
    );
  }
}

export default Portfolio;
