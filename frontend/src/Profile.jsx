import React from "react";
import "./Profile.css";
import { useParams } from "react-router-dom";
import Navbar from "./components/Navbar";
import Heading from "./components/Heading";

const Profile = () => {
  const { user } = useParams();
  let usrCmp = "Hill & Knowlton";
  let usrName = "Sam Smith";
  let usrUsNm = "ssmith";
  let usrTpe = "Customer";
  let usrDesc =
    "Hill & Knowlton is the global strategic communications leader for transformation. A trusted partner for sustainable value creation and protection, we help brands, businesses and leaders build reputation, manage risk, and create breakthrough opportunities for growth. Founded in 1927, today’s Hill & Knowlton operates 70 offices in over 30 countries, providing advisory, public relations and creative solutions to local and global clients. Our global team offers integrated strategic services, grounded in deep sector expertise, and enabled by creativity and intelligence. Headquartered in New York, Hill & Knowlton is part of WPP, the world’s largest marketing and communications services company.";

  return (
    <div>
      <Heading />
      <div className="slot">
        <title>Hill & Knowlton - {usrName}</title>
        <section class="usrProfile">
          <div class="usrImgs">
            <div class="usrBnr">
              <img src="/banner.jpg" alt="Banner" />
            </div>
            <div class="usrProIm">
              <img src="/HKLogo.png" alt="Logo" />
            </div>
          </div>
          <div class="usrNmUr">
            <div class="usrCmp">{usrCmp}</div>
            <div class="usrName">{usrName}</div>
            <div class="usrUsNm">@{usrUsNm}</div>
          </div>
          <div class="usrDesc">
            <div class="usrCmp">{usrTpe}</div>
            <p>{usrDesc}</p>
          </div>
        </section>
      </div>
      <Navbar />
    </div>
  );
};

export default Profile;
