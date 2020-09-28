import React from "react";
import "css/chatbot.css";

const Chatbot = (props) => {
  const { open, header, text, closePopup } = props;
  return (
    <div className="chatbot-container open">
      <div className={`popup ${open ? "open" : ""}`}>
        <div className="header">
          <span>{header}</span>
          <button className="close-button" onClick={closePopup}>
            <div className="close-icon" />
          </button>
        </div>
        <div className="body">{text}</div>
      </div>
    </div>
  );
};

export default Chatbot;
