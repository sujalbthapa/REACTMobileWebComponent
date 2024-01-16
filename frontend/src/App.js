import React from "react";
import Home from "./Home";
import Profile from "./Profile";
import Mails from "./Mails";
import Notification from "./Notification";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/notifications" element={<Notification />} />
        <Route path="/:user/profile" element={<Profile />} />
        <Route path="/:user/mail" element={<Mails />} />
      </Routes>
    </Router>
  );
};
export default App;
