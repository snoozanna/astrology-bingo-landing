import React from "react";

import "./Orb.css";

const Orb = ({ title, modal }) => {
  //if modal status = open return more info
  //if modal status /= open return title

  return (
    <div className="orb">
      <h2>{title}</h2>
    </div>
  );
};

export default Orb;
