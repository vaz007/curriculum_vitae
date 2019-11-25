/// CHILD COMPONENT FOR EDUCATION

import React from "react";

const EducationFunction = props => {
  return (
    <div>
      <h3>{props.heading}</h3>
      <p className="info">
        {props.info} <span>&bull;</span> <em className="date">{props.date}</em>
      </p>
      <p className="details">{props.details}</p>
    </div>
  );
};
export default EducationFunction;
