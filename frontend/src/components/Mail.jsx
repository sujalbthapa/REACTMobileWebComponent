import "./Mail.css";
import React from "react";

const Mail = () => {
  const mailSenderUsrName = "John Wick";
  const mailSenderUsrUsNm = "jwick";
  const mailSenderUsrEm = "jwick@hk.com";
  const mailDate = "01/16/2024 - 06:54";
  const mailTitl = "Regarding recent changes to the website";
  const mailMsg =
    "Founded in 1927, today’s Hill & Knowlton operates 70 offices in over 30 countries, providing advisory, public relations and creative solutions to local and global clients. Our global team offers integrated strategic services, grounded in deep sector expertise, and enabled by creativity and intelligence.";

  return (
    <div className="notiMainContain">
      <div className="notiIcn">
        <i className="bx bx-envelope"></i>
      </div>
      <div className="notiUsrPro">
        <div className="notiUsrImg">
          <img src="/HKLogo.png" alt="Logo" />
        </div>
        <div className="notiUsrNam">
          <p>
            {mailSenderUsrName}
            <br />
            <span>
              <a href={`/${mailSenderUsrUsNm}/profile`}>@{mailSenderUsrUsNm}</a>
            </span>
            <span>|| {mailDate}</span>
          </p>
        </div>
      </div>
      <div className="notiMsg">
        <div className="notiMsgTitl">
          <h3>Subject: {mailTitl}</h3>
          <h4>From: {mailSenderUsrEm}</h4>
        </div>
        <div className="notiMsgTxt">
          <p>{mailMsg}</p>
        </div>
      </div>
    </div>
  );
};

export default Mail;
