import React from "react";
import Popup from "./Popup";

const BottomRightPopup = (props) => {
  const { open } = props;
  return (
    <div className={`corner-container bottom-right ${open ? "open" : ""}`}>
      <Popup {...props} />
    </div>
  );
};

export default BottomRightPopup;
