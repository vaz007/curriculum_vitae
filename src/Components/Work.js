import React, { Component } from "react";
import "../CSS/Eandw.css";
export class Work extends Component {
  render() {
    return (
      <div className="row work" id="resume">
        <div className="col-sm-12 col-md-3 col-lg-3">
          <h1>
            <span>Work</span>
          </h1>
        </div>

        <div className="col-sm-12 col-md-9 col-lg-9 text-left">
          <h3>Adapt Ideations Pvt. Ltd.</h3>
          <h4> Sydney, Australia.</h4>
          <p className="info">
            Software Developer <span>&bull;</span>{" "}
            <em className="date">November 2018 - Present</em>
          </p>
          <p className="details">
            Worked on various complex API for CHEP backend system. The API
            included geofence, billing cycle, as well as registering existing
            and new organisations and customers. Further, I developed the login
            and logout API with building sessions and storing cookies with JSON
            web tokens. We used the MERN stack to build this Web App, and this
            helped the company to bring their backend, and frontend systems
            under one umbrella of Javascript, moreover solved the scalability
            issue which they were facing in the previous system which was made
            on PHP and various other platforms.
          </p>
          <p className="details">
            Worked on improving the battery performance and percentage mapping
            for Kelvin device using Highcharts for visualisation, this helped
            the team in calculating the right value for percentage with respect
            to voltage.
          </p>
          <p className="details">
            Developed Adapt Sniffer an Android application for DHL employees,
            the application scans all the Wi-Fi devices, cell towers, marks the
            user’s current location and sends the data to the database every 5
            seconds. The goal is to help find Kelvin device whenever it is
            unable to send its location to the database.
          </p>

          <h3>Aeon Pvt. Ltd.</h3>
          <h4> Mulund, Mumbai.</h4>
          <p className="info">
            Intern <span>&bull;</span>{" "}
            <em className="date">September 2017 - October 2017</em>
          </p>
          <p className="details">
            During the four weeks of my internship period, was working with a
            team of six people and in the first three weeks we developed the
            website and in the final week leading the team to deploy the website
            to the headquarters of Aditya Birla Financials. It helped the
            financial firm to merge all their different websites under one hood,
            improve UI and various different aspects of website.
          </p>

          <h3>MDS Pvt. Ltd.</h3>
          <h4> Mulund, Mumbai.</h4>
          <p className="info">
            Intern <span>&bull;</span>{" "}
            <em className="date">September 2017 - October 2017</em>
          </p>
          <p className="details">
            Improved the response time of the website by reducing the image size
            and using queries to only load when it is needed. Which led to
            improve in whole performance of the website by 10%.
          </p>

          <h3>Municipal Corporation of greater Mumbai</h3>
          <h4> Mulund, Mumbai.</h4>
          <p className="info">
            Intern <span>&bull;</span>{" "}
            <em className="date">September 2017 - October 2017</em>
          </p>
          <p className="details">
            Key learning was understanding customized version of Telvent
            software by L&T and how information flows between central site and
            host site.
          </p>
        </div>
      </div>
    );
  }
}

export default Work;
