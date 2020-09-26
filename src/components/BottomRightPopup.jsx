import React from "react";
import "css/bottomRightPopup.css";

const BottomRightPopup = (props) => {
  const { open, header, text, closePopup } = props;
  return (
    <div className={`popup ${open ? "open" : ""}`}>
      <div className="popup-header">
        <span>{header}</span>
        <button className="close-button" onClick={closePopup}>
          <div className="close-icon" />
        </button>
      </div>
      <div className="popup-body">{text}</div>
    </div>
  );
};

export default BottomRightPopup;
