import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Position:</strong> {props.position}
          </li>
          <li>
            <strong>Type of employee:</strong> {props.payType}
          </li>
          <li>
            <strong>Works remotely:</strong> {props.remote}
          </li>
          <li>
            <strong>Yearly earning: </strong> ${props.pay}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FriendCard;
