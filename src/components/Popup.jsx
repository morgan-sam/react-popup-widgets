import React from "react";
import "css/popup.css";

const Popup = (props) => {
  const { open } = props;
  return <div className={`popup ${open ? "open" : ""}`}>Popup</div>;
};

export default Popup;
