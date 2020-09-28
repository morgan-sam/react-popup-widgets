import React from "react";
import "css/overlayPopup.css";
import Popup from "./Popup.jsx";

const OverlayPopup = (props) => {
  const { open } = props;
  return (
    <div className={`overlay-popup-container ${open ? "open" : ""}`}>
      <Popup {...props} />
    </div>
  );
};

export default OverlayPopup;
