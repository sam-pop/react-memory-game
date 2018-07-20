import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header fixed-top">
    <div className="text-center">
      <h4>Fun with (red) flags!</h4>
      <span className="score">Total Score: {props.score}</span>
      &nbsp;|&nbsp;
      <span className="loses">Games Lost: {props.loses}</span>
      &nbsp;|&nbsp;
      <span className="highScore">High Score: {props.highScore}</span>
    </div>
  </div>
);

export default Header;
