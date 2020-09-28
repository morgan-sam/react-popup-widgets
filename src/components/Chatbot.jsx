import React from "react";
import "css/chatbot.css";
import PopupHeader from "components/PopupHeader";
import icon from "img/customer-service.svg";

const Chatbot = (props) => {
  const { open, header, text, closePopup } = props;
  return (
    <div className="corner-container bottom-left open">
      <div className={`popup ${open ? "open" : ""}`}>
        <PopupHeader {...{ header, closePopup }} />
        <div className="body">
          <img src={icon} className="chatbot-icon" />
          <div>{text}</div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
