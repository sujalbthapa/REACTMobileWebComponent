import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Mail from "./components/Mail";
import Heading from "./components/Heading";

const Mails = () => {
  const { user } = useParams();

  return (
    <div>
      <Heading />
      <div className="slot">
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
        <Mail />
      </div>
      <Navbar />
    </div>
  );
};

export default Mails;
