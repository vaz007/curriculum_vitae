import React from "react";

const header = props => {
  return (
    <div className="col-sm-12 col-md-3 col-lg-3">
      <h1>
        <span>{props.mainHeader}</span>
      </h1>
    </div>
  );
};

export default header;
