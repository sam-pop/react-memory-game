import React from "react";

const Wrapper = props => (
  <div className="wrapper container">
    <div className="row">{props.children}</div>
  </div>
);

export default Wrapper;
