import React, { useState } from "react";
import "css/app.css";
import Popup from "./Popup.jsx";

const noOfWidgets = 5;

function App() {
  const [widgetsOpen, setWidgetsOpen] = useState(
    new Array(noOfWidgets).fill(false)
  );
  return (
    <div className="page">
      <div className="title">Popup Widgets</div>
      {[...Array(noOfWidgets).keys()].map((i) => (
        <div className="widget-info">
          <button
            className={`btn ${widgetsOpen[i] ? "enabled" : ""}`}
            onClick={() => {
              let newArr = [...widgetsOpen];
              newArr[i] = !widgetsOpen[i];
              setWidgetsOpen(newArr);
            }}
          >
            Popup {i + 1}
          </button>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
            minus.
          </div>
          <Popup
            open={widgetsOpen[i]}
            header={`Popup #${i + 1}`}
            text={
              "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda, minus."
            }
          />
        </div>
      ))}
    </div>
  );
}

export default App;
