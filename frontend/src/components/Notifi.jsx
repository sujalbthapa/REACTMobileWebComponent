import "./Notification.css";
import React from "react";

const Notifi = () => {
  const notiUsrName = "John Wick";
  const notiUsrUsNm = "jwick";
  const notiDate = "01/16/2024 - 06:54";
  const notiMsgTitl = "Notification Title";
  const notiMsg =
    "Hill & Knowlton is the global strategic communications leader for transformation. A trusted partner for sustainable value creation and protection, we help brands, businesses and leaders build reputation, manage risk, and create breakthrough opportunities for growth.";

  return (
    <div className="notiMainContain">
      <div className="notiIcn">
        <i className="bx bx-bell"></i>
      </div>
      <div className="notiUsrPro">
        <div className="notiUsrImg">
          <img src="/HKLogo.png" alt="Logo" />
        </div>
        <div className="notiUsrNam">
          <p>
            {notiUsrName}
            <br />
            <span>
              <a href={`/${notiUsrUsNm}/profile`}>@{notiUsrUsNm}</a>
            </span>
            <span>|| {notiDate}</span>
          </p>
        </div>
      </div>
      <div className="notiMsg">
        <div className="notiMsgTitl">
          <h3>{notiMsgTitl}</h3>
        </div>
        <div className="notiMsgTxt">
          <p>{notiMsg}</p>
        </div>
      </div>
    </div>
  );
};

export default Notifi;
