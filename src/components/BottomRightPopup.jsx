import React from "react";
import Popup from "./Popup";
import "css/bottomRightPopup.css";

const BottomRightPopup = (props) => {
  const { open } = props;
  return (
    <div className={`bottom-right-popup-container ${open ? "open" : ""}`}>
      <Popup {...props} />
    </div>
  );
};

export default BottomRightPopup;
