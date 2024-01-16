import React from "react";
import "./Navbar.css";

const NavBar = () => {
  const user = "sujalbthapa";

  return (
    <nav className="navBar">
      <div className="navLogout">
        <a href="/logout" target="_self">
          <i className="bx bx-log-out"></i>
        </a>
      </div>
      <div className="navEmail">
        <a href={`/${user}/mail`} target="_self">
          <i className="bx bx-envelope"></i>
        </a>
      </div>
      <div className="navHome">
        <a href="/" target="_self">
          <i className="bx bx-home"></i>
        </a>
      </div>
      <div className="navNoti">
        <a href="/notifications" target="_self">
          <i className="bx bx-bell"></i>
        </a>
      </div>
      <div className="navProfile">
        <a href={`/${user}/profile`} target="_self">
          <i className="bx bx-face"></i>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
