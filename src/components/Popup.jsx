import React from "react";
import "css/popup.css";

const Popup = (props) => {
  const { open, header, text } = props;
  return (
    <div className={`popup ${open ? "open" : ""}`}>
      <div className="popup-header">{header}</div>
      <div className="popup-body">{text}</div>
    </div>
  );
};

export default Popup;
