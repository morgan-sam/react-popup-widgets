import React, { useState } from "react";
import "css/app.css";

import ToggleButton from "components/ToggleButton.jsx";
import BottomRightPopup from "components/BottomRightPopup.jsx";
import TopBanner from "components/TopBanner.jsx";
import OverlayPopup from "components/OverlayPopup.jsx";

import { toggleDarkTheme } from "js/utility";

import logo from "img/sezzle_logo.png";

const widgets = [
  {
    component: BottomRightPopup,
    description: "A small popup that appears in the bottom right corner.",
  },
  {
    component: TopBanner,
    description: "A banner that appears across the top of the screen.",
  },
  {
    component: OverlayPopup,
    description: "A popup that appears with a dark overlay across the screen.",
  },
];

function App() {
  const [widgetsOpen, setWidgetsOpen] = useState(
    new Array(widgets.length).fill(false)
  );
  const [darkTheme, setDarkTheme] = useState(false);

  const togglePopup = (i) => {
    let newArr = [...widgetsOpen];
    newArr[i] = !widgetsOpen[i];
    setWidgetsOpen(newArr);
  };

  React.useEffect(() => {
    toggleDarkTheme(darkTheme);
  }, [darkTheme]);

  return (
    <div className="page">
      <div className="title">Sezzle Popup Widgets</div>
      <img src={logo} className="logo" />
      <div className="darktheme-label">Dark Theme</div>
      <ToggleButton
        active={darkTheme}
        onClick={() => setDarkTheme(!darkTheme)}
      />
      {[...Array(widgets.length).keys()].map((i) => (
        <div className="widget-info">
          <button
            className={`btn ${widgetsOpen[i] ? "enabled" : ""}`}
            onClick={() => togglePopup(i)}
          >
            Popup {i + 1}
          </button>
          <div>{widgets[i].description}</div>
          {React.createElement(widgets[i].component, {
            open: widgetsOpen[i],
            header: `Popup #${i + 1}`,
            text:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, minus.",
            closePopup: () => togglePopup(i),
          })}
        </div>
      ))}
    </div>
  );
}

export default App;
