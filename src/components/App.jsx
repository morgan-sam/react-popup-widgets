import React from "react";
import "css/app.css";
import Popup from "./Popup.jsx";

function App() {
  return (
    <div className="page">
      <div className="title">Popup Widgets</div>
      {[...Array(10).keys()].map((i) => (
        <div className="widget-info">
          <button>Popup {i + 1}</button>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
            minus.
          </div>
        </div>
      ))}
      <Popup />
    </div>
  );
}

export default App;
