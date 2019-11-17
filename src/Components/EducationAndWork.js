import React, { Component } from "react";
import "../CSS/Eandw.css";
export class EducationAndWork extends Component {
  render() {
    return (
      <div id ="resume">
       <div class="row education">
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

          <div class="row work">
            <div class="col-sm-12 col-md-3 col-lg-3">
              <h1>
                <span>Work</span>
              </h1>
            </div>

            <div class="col-sm-12 col-md-9 col-lg-9 text-left">
              <h3>Adapt Ideations Pvt. Ltd.</h3>
              <h4> Sydney, Australia.</h4>
              <p class="info">
                Software Developer <span>&bull;</span>{" "}
                <em class="date">November 2018 - Present</em>
              </p>
              <p className="details">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum
                felis eu pede mollis pretium.
              </p>

              <h3>Aeon Pvt. Ltd.</h3>
              <h4> Mulund, Mumbai.</h4>
              <p class="info">
                Intern <span>&bull;</span>{" "}
                <em class="date">September 2017 - October 2017</em>
              </p>
              <p className="details">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum
                felis eu pede mollis pretium.
              </p>

              <h3>MDS Pvt. Ltd.</h3>
              <h4> Mulund, Mumbai.</h4>
              <p class="info">
                Intern <span>&bull;</span>{" "}
                <em class="date">September 2017 - October 2017</em>
              </p>
              <p className="details">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridiculus
                mus. Donec quam felis, ultricies nec, pellentesque eu, pretium
                quis, sem. Nulla consequat massa quis enim. Donec pede justo,
                fringilla vel, aliquet nec, vulputate eget, arcu. Nullam dictum
                felis eu pede mollis pretium.
              </p>

              <h3>Municipal Corporation of greater Mumbai</h3>
              <h4> Mulund, Mumbai.</h4>
              <p class="info">
                Intern <span>&bull;</span>{" "}
                <em class="date">September 2017 - October 2017</em>
              </p>
              <p className="details">
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum, nec sagittis sem
                nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit
                amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio
                tincidunt auctor a ornare odio. Sed non mauris vitae erat
              </p>
            </div>
          </div>
    </div>
    );
  }
}

export default EducationAndWork;
