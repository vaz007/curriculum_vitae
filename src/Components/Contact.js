import React, { Component } from "react";
import "../CSS/Contact.css";

export class Contact extends Component {
  render() {
    return (
      <div>
        <div id="contact">
          <div class="row contact">
            <div class="col-sm-12 col-md-12 col-lg-3">
              <h1>
                <span>Contact</span>
              </h1>
            </div>
            
            <div class="col-sm-3 col-md-6 col-lg-2">
              <div class="card box shadow">
                <h5>Location</h5>
                <p className="info">
                  24, Hawdon Street, Ainslie, Canberra, ACT-2602
                </p>
              </div>
            </div>
            <div class="col-sm-3 col-md-6 col-lg-2">
              <div class="card box shadow">
                <h5>Contact</h5>
                <p className="info">+61 0474296023</p>
              </div>
            </div>

            <div class="col-sm-3 col-md-6 col-lg-2">
              <div class="card box shadow">
                <h5>Email</h5>
                <p className="info">
                  24, Hawdon Street, Ainslie, Canberra, ACT-2602
                </p>
              </div>
            </div>

            <div class="col-sm-3 col-md-6 col-lg-2">
              <div class="card box shadow">
                <h5>Social Media</h5>
                <p className="info">
                  24, Hawdon Street, Ainslie, Canberra, ACT-2602
                </p>
              </div>
            </div>

            <div class="col-sm-12 col-md-10 col-lg-6">
              <div className="messageBox card box shadow">
                <form className="">
                  <div
                    class="row justify-content-centre"
                    style={{
                      marginTop: "2rem",
                      marginLeft: "1rem",
                      marginRight: "1rem",
                      marginBottom: "1rem"
                    }}
                  >
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Full Name"
                       
                      />
                    </div>
                    <div class="col">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                  <div className = "row justify-content-centre">
                    <div class="col-sm-10 col-md-10 col-lg-6">
                        <textarea
                          type="text"
                          class="textArea form-control"
                          placeholder="Message"
                          style={{
                            marginLeft: "2rem",
                            marginBottom: "1rem",
                            height: "5rem"
                          }}
                        />
                      </div>  
                    </div>
                  <div className = "row">
                  <div class="col-sm-12 col-md-10 col-lg-6">
                        <button type="submit" class="btn btn-primary">
                          Send
                        </button>
                      </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
