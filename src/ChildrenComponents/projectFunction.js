import React from "react";

const projectFunction = props => {
  return (
      <div className="card box shadow" style={{ width: "25rem" }}>
        <img
          className="card-img"
          alt="Card"
          src={props.image}
          style={{ minHeight: "250px", height: "5rem" }}
        />
        <div className="card-img-overlay">
          <h5 className="card-title" style={{ color: "white" }}>
            {props.title}{" "}
          </h5>
          <p className="card-text" style={{ color: "white" }}>
            {props.details}
          </p>
        </div>
      </div>
    
  );
};

export default projectFunction;
