import React from "react";
import Notifi from "./components/Notifi";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";

const Notification = () => {
  return (
    <div>
      <Heading />
      <div className="slot">
        <Notifi />
        <Notifi />
        <Notifi />
        <Notifi />
        <Notifi />
        <Notifi />
        <Notifi />
        <Notifi />
        <Notifi />
        <Notifi />
        <Notifi />
        <Notifi />
        <Notifi />
        <Notifi />
        <Notifi />
      </div>
      <Navbar />
    </div>
  );
};

export default Notification;
