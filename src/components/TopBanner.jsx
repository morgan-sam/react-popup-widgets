import React from "react";
import "css/topBanner.css";

const TopBanner = (props) => {
  const { open, header, text, closePopup } = props;
  return (
    <div className={`top-banner ${open ? "open" : ""}`}>
      <div>
        Sezzle is currently hiring!:{" "}
        <a href="https://sezzle.com/careers">learn more {">"}</a>
      </div>
      <div>{text}</div>
      <button className="top-banner-close-btn" onClick={closePopup}>
        <div className="cross-line" />
        <div className="cross-line" />
      </button>
    </div>
  );
};

export default TopBanner;
