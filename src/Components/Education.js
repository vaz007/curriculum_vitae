import React, { Component } from "react";
import "../CSS/Eandw.css";

import EdFunction from '../ChildrenComponents/educationFunction';
import MainHeader from '../ChildrenComponents/header'

const Education = require("../Data/data");
const EducationDataH1 = Education[1].education.h1;
const ANU = Education[1].education.data[0].ANU;
const IBSAR = Education[1].education.data[1].IBSAR;

export class EducationAndWork extends Component {
  render() {
    return (
      <div className="row education" id="resume">
        <MainHeader mainHeader = {EducationDataH1} />
         <div className="col-sm-12 col-md-9 col-lg-9 text-left">
        <EdFunction heading = {ANU.heading} info = {ANU.info} date = {ANU.date} details = {ANU.details} />
        <EdFunction heading = {IBSAR.heading} info = {IBSAR.info} date = {IBSAR.date} details = {IBSAR.details} />
        </div>
      </div>
    );
  }
}

export default EducationAndWork;
