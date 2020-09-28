import React, { useState, useEffect } from "react";
import "css/chatbot.css";
import PopupHeader from "components/PopupHeader";
import icon from "img/customer-service.svg";

const Chatbot = (props) => {
  const [lastActive, setLastActive] = useState(0);
  const { open, header, text, closePopup } = props;

  useEffect(() => {
    if (open) {
      setInterval(() => {
        setLastActive((time) => time + 1);
      }, 1000);
    }
  }, [open]);

  return (
    <div className="corner-container bottom-left open">
      <div className={`popup ${open ? "open" : ""}`}>
        <PopupHeader {...{ header, closePopup }} />
        <div className="body">
          <img src={icon} className="chatbot-icon" />
          <div>{lastActive}</div>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
