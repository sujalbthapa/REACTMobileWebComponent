import React from "react";
import Mail from "./components/Mail";
import Notification from "./components/Notifi";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";

const Home = () => {
  return (
    <div>
      <Heading />
      <div className="slot">
        <Notification />
        <Mail />
        <Notification />
        <Mail />
        <Notification />
        <Mail />
      </div>
      <Navbar />
    </div>
  );
};

export default Home;
