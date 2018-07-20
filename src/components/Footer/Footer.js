import React from "react";
import "./Footer.css";

const img = "./img/react-heart-icon.svg";
const Footer = () => (
  <footer className="footer  fixed-bottom">
    <div className="text-center">
      Created with&nbsp;
      <img src={img} width="35px" alt="react-logo" />
      &nbsp;by Samuel Poplovitch
    </div>
  </footer>
);

export default Footer;
