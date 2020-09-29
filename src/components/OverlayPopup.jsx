import React from "react";
import "css/overlayPopup.css";
import Popup from "./Popup.jsx";
import { closeIfClickedOutside } from "js/popup";

const OverlayPopup = (props) => {
  const { open, closePopup } = props;

  return (
    <div
      className={`overlay-popup-container ${open ? "open" : ""}`}
      onClick={(e) =>
        closeIfClickedOutside(e, open, closePopup, "overlay-popup")
      }
    >
      <Popup {...props} className="overlay-popup" />
    </div>
  );
};

export default OverlayPopup;
