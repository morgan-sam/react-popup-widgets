import React from "react";
import PopupHeader from "./PopupHeader.jsx";

const TimerPopup = (props) => {
  const { open, header, closePopup } = props;
  return (
    <div className={`overlay-popup-container ${open ? "open" : ""}`}>
      <div className={`popup ${open ? "open" : ""}`}>
        <PopupHeader {...{ header, closePopup }} />
        <div className="body">Countdown Timer</div>
      </div>
    </div>
  );
};

export default TimerPopup;
