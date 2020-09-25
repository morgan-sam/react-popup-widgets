import React from "react";
import "css/popup.css";

const Popup = (props) => {
  const { open, text } = props;
  return <div className={`popup ${open ? "open" : ""}`}>{text}</div>;
};

export default Popup;
