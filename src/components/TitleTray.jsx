import React, { useState } from "react";
import "css/titleTray.css";
import ToggleButton from "components/ToggleButton.jsx";
import logo from "img/sezzle_logo.png";
import QuarterMoon from "components/QuarterMoon";

const TitleTray = (props) => {
  const [quad, setQuad] = useState(0);
  const { darkTheme, setDarkTheme } = props;
  return (
    <div className="title-tray">
      <div className="darktheme-container">
        <div className="darktheme-label">Dark Theme</div>
        <ToggleButton
          active={darkTheme}
          onClick={() => setDarkTheme(!darkTheme)}
        />
      </div>
      <img
        src={logo}
        className="logo"
        alt="sezzle-logo"
        style={{ filter: `hue-rotate(${90 * quad}deg)` }}
      />
      <QuarterMoon {...{ quad, setQuad }} />
    </div>
  );
};

export default TitleTray;
