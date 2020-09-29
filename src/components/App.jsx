import React, { useState } from "react";

import "css/app.css";
import "css/containers.css";

import TitleTray from "./TitleTray";

import BottomRightPopup from "components/BottomRightPopup.jsx";
import TopBanner from "components/TopBanner.jsx";
import OverlayPopup from "components/OverlayPopup.jsx";
import TimerPopup from "components/TimerPopup.jsx";
import Chatbot from "components/Chatbot.jsx";

import { toggleDarkTheme } from "js/utility";

const widgets = [
  {
    component: BottomRightPopup,
    label: "Popup",
    description: "A small popup that appears in the bottom right corner.",
  },
  {
    component: TopBanner,
    label: "Banner",
    description: "A banner that appears across the top of the screen.",
  },
  {
    component: OverlayPopup,
    label: "Overlay",
    description: "A popup that appears with a dark overlay across the screen.",
  },
  {
    component: TimerPopup,
    label: "Timer",
    description: "A popup with a countdown timer.",
  },
  {
    component: Chatbot,
    label: "Chatbot",
    description: "A chatbot to answer customer queries.",
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
      <TitleTray {...{ darkTheme, setDarkTheme }} />
      <div className="widget-info">
        {[...Array(widgets.length).keys()].map((i) => [
          <button
            className={`btn ${widgetsOpen[i] ? "enabled" : ""}`}
            onClick={() => togglePopup(i)}
          >
            {widgets[i].label}
          </button>,
          <div>{widgets[i].description}</div>,
          React.createElement(widgets[i].component, {
            open: widgetsOpen[i],
            header: `Popup #${i + 1}`,
            text:
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, minus.",
            closePopup: () => togglePopup(i),
          }),
        ])}
      </div>
    </div>
  );
}

export default App;
