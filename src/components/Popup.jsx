import React from "react";
import "css/popup.css";
import PopupHeader from "components/PopupHeader";

const Popup = (props) => {
  const { open, header, text, closePopup } = props;
  return (
    <div className={`popup ${open ? "open" : ""}`}>
      <PopupHeader {...{ header, closePopup }} />
      <div className="body">{text}</div>
    </div>
  );
};

export default Popup;
