import React from "react";
import "css/titleTray.css";
import ToggleButton from "components/ToggleButton.jsx";
import logo from "img/sezzle_logo.png";

const TitleTray = (props) => {
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
      <img src={logo} className="logo" />
      <div className="darktheme-container">
        <div className="darktheme-label">Dark Theme</div>
        <ToggleButton
          active={darkTheme}
          onClick={() => setDarkTheme(!darkTheme)}
        />
      </div>
    </div>
  );
};

export default TitleTray;
