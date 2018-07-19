import React from "react";
import "./Footer.css";

const img = "./img/react-heart-icon.svg";
const Footer = () => (
  <footer className="footer fixed-bottom">
    <div className="text-center">
      {" "}
      Created by
      <img className="" src={img} width="35px" /> Samuel Poplovitch
    </div>
  </footer>
);

export default Footer;
