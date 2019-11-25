import React from 'react'

const skillsFunction = (props) => {
    return (
        <div>
        <h6>{props.skillName}</h6>
          <div className="progress" style={{ height: "10px" }}>
            <div
              className="progress-bar"
              role="progressbar"
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
              style= {{ width : htm.html, backgroundColor: "#333" }}
            ></div>
          </div>
    </div>

    )
}

const htm = {
  html : "75%"
}

export default skillsFunction
