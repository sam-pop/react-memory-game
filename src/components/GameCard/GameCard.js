import React from "react";
import "./GameCard.css";

const GameCard = props => (
  <div
    className="card col-md-3"
    style={{ backgroundImage: props.image ? `url(${props.image})` : "none" }}
    onClick={() => props.handleGameCardClick(props.id)}
  />
);

export default GameCard;
