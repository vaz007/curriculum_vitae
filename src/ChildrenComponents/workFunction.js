import React from "react";

const workFunction = props => {
  console.log(props);
  return (
    <div>
      <h3>{props.heading3}</h3>
      <h4> {props.location}</h4>
      <p className="info">
        {props.info} <span>&bull;</span> <em className="date">{props.date}</em>
      </p>
      <p className="details">{props.details1}</p>
      <p className="details">{props.details2}</p>
      <p className="details">{props.details3}</p>
    </div>
  );
};

export default workFunction;
