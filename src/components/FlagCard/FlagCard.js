import React from "react";
import "./FlagCard.css";

const FlagCard = props => (
  <div
    className="card col-md-3"
    style={{ backgroundImage: props.image ? `url(${props.image})` : "none" }}
    onClick={() => props.handleFlagCardClick(props.id)}
  />
);

export default FlagCard;
