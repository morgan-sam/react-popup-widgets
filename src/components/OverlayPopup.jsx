import React from "react";
import "css/overlayPopup.css";
import Popup from "./Popup.jsx";

const OverlayPopup = (props) => {
  const { open, closePopup } = props;

  const hasParentClass = (element, classname) => {
    if (
      element.className &&
      element.className.split(" ").indexOf(classname) >= 0
    )
      return true;
    return element.parentNode && hasParentClass(element.parentNode, classname);
  };

  const clicked = (e) => {
    const clickedOutside = !hasParentClass(e.target, "overlay-popup");
    if (open && clickedOutside) closePopup();
  };

  return (
    <div
      className={`overlay-popup-container ${open ? "open" : ""}`}
      onClick={(e) => clicked(e)}
    >
      <Popup {...props} className="overlay-popup" />
    </div>
  );
};

export default OverlayPopup;
