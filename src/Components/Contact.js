import React, { Component } from "react";
import "../CSS/Contact.css";
export class Contact extends Component {
  render() {
    return (
        <div id="contact">
          <div className="row contact">
            <div className="col-sm-12 col-md-12 col-lg-3">
              <h1>
                <span>Contact</span>
              </h1>
            </div>

            <div className="col-sm-3 col-md-6 col-lg-2">
              <div className="card box shadow">
                <h5>
                  <span>Location</span>
                </h5>
                <span style={{ fontSize: "48px", color: "Dodgerblue" }}>
                <i className="fas fa-map-marker-alt"></i>
                </span>
                <p className = "icons">
                  24, Hawdon Street, Ainslie, Canberra, ACT-2602
                </p>
              </div>
            </div>
            <div className="col-sm-3 col-md-6 col-lg-2">
              <div className="card box shadow">
                <h5>
                  <span>Contact</span>
                </h5>
                <span style={{ fontSize: "48px", color: "Dodgerblue" }}>
                <i className="fas fa-phone-alt"></i>
                </span>
                <p className = "icons">+61 0474296023</p>
              </div>
            </div>

            <div className="col-sm-3 col-md-6 col-lg-2">
              <div className="card box shadow">
                <h5>
                  <span>Email</span>
                </h5>
                <span style={{ fontSize: "48px", color: "Dodgerblue" }}>
                <i className="fas fa-envelope"></i>
                </span>
                <p className = "icons">ankurvazirani05@gmail.com</p>
              </div>
            </div>

            <div className="col-sm-3 col-md-6 col-lg-2">
              <div className="card box shadow">
                <h5>
                  <span>Social Media</span>
                </h5>
                <span style={{ fontSize: "48px", color: "Dodgerblue" }}>
                  <i className="fab fa-linkedin"></i>
                </span>
                <span
                  style={{
                    fontSize: "48px",
                    color: "Dodgerblue",
                    marginLeft: "1rem"
                  }}
                >
                  <i className="fab fa-facebook"></i>

                </span>

                <span style={{ fontSize: "48px", marginLeft: "1rem"}}>
                  <i className="fab fa-github"></i>
                </span>
                <p className = "icons">Know more about me.</p>
                
              </div>
            </div>

            {/* <div className="col-sm-12 col-md-10 col-lg-6">
              <div className="messageBox card box shadow">
                <form className="">
                  <div
                    className="row justify-content-centre"
                    style={{
                      marginTop: "2rem",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      marginBottom: "1rem"
                    }}
                  >
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Full Name"
                      />
                    </div>
                    <div className="col">
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className="row justify-content-centre">
                    <div className="col-sm-10 col-md-10 col-lg-6">
                      <textarea
                        type="text"
                        className="textArea form-control"
                        placeholder="Message"
                        style={{
                          marginLeft: "2rem",
                          marginBottom: "1rem",
                          height: "5rem"
                        }}
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-sm-12 col-md-10 col-lg-6">
                      <button type="submit" className="btn btn-primary">
                        Send
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      
    );
  }
}

export default Contact;
