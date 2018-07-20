import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header fixed-top">
    <div className="text-center">
      <h2>
        Fun with (<span style={{ color: "red" }}>red</span>) flags!
      </h2>
      <span className="score tab" style={{ "font-size": "1.1em" }}>
        <b>Total Score:</b> {props.score}
      </span>
      <span className="loses tab">
        <i>Games Lost:</i>{" "}
        <span style={{ color: "lightgray" }}>{props.loses}</span>
      </span>
      <span className="highScore tab">
        <i>High Score:</i>{" "}
        <span style={{ color: "lightgreen" }}>{props.highScore}</span>
      </span>
    </div>
  </div>
);

export default Header;
