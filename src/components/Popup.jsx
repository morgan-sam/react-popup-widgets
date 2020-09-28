import React from "react";
import "css/popup.css";

const Popup = (props) => {
  const { open, header, text, closePopup } = props;
  return (
    <div className={`popup ${open ? "open" : ""}`}>
      <div className="header">
        <span>{header}</span>
        <button className="close-button" onClick={closePopup}>
          <div className="close-icon" />
        </button>
      </div>
      <div className="body">{text}</div>
    </div>
  );
};

export default Popup;
