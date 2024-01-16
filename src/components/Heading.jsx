import "./Header.css";
import React from "react";

const Heading = () => {
  return (
    <div className="headBar">
      <img src="/HKLogo.png" alt="HK Logo" />
      <p>
        Hill <span>&</span> Knowlton
      </p>
    </div>
  );
};

export default Heading;
