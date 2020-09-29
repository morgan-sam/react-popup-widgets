import React from "react";
import "css/popup.css";
import PopupHeader from "components/PopupHeader";

const Popup = (props) => {
  const { open, header, text, closePopup, className } = props;
  return (
    <div className={`${className} popup ${open ? "open" : ""}`}>
      <PopupHeader {...{ header, closePopup }} />
      <div className="body">{text}</div>
    </div>
  );
};

export default Popup;
