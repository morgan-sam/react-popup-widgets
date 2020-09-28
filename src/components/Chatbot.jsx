import React from "react";
import "css/chatbot.css";
import PopupHeader from "components/PopupHeader";

const Chatbot = (props) => {
  const { open, header, text, closePopup } = props;
  return (
    <div className="chatbot-container open">
      <div className={`popup ${open ? "open" : ""}`}>
        <PopupHeader {...{ header, closePopup }} />
        <div className="body">{text}</div>
      </div>
    </div>
  );
};

export default Chatbot;
