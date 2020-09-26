import React from "react";
import "css/topBanner.css";

const TopBanner = (props) => {
  const { text } = props;
  return (
    <div className="top-banner">
      <div>Top Banner</div>
      <div>{text}</div>
      <button className="top-banner-close-btn">
        <div className="cross-line" />
        <div className="cross-line" />
      </button>
    </div>
  );
};

export default TopBanner;
