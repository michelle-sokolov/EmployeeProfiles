import React from "react";
import "./style.css";

function Title(props) {
  return <div className="title">
    <h2>Employee Roster</h2>
    <button onClick={() => props.remoteEmployee(props.id)} className="remote">
        Show only remote employees
      </button>
    <button onClick={() => props.sortEmployee(props.id)} className="salary">
      Sort earnings from high to low
    </button>
  </div>;
}

export default Title;
