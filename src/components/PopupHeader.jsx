import React from "react";

const PopupHeader = (props) => {
  const { header, closePopup } = props;
  return (
    <div className="header">
      <span>{header}</span>
      <button className="close-button" onClick={closePopup}>
        <div className="close-icon" />
      </button>
    </div>
  );
};

export default PopupHeader;
