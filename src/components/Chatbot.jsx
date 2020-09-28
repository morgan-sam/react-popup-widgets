import React from "react";
import PopupHeader from "components/PopupHeader";

const Chatbot = (props) => {
  const { open, header, text, closePopup } = props;
  return (
    <div className="corner-container bottom-left open">
      <div className={`popup ${open ? "open" : ""}`}>
        <PopupHeader {...{ header, closePopup }} />
        <div className="body">{text}</div>
      </div>
    </div>
  );
};

export default Chatbot;
