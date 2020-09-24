import React from "react";
import "css/app.css";

function App() {
  return (
    <div className="page">
      <div className="title">Popup Widgets</div>
      {[...Array(10).keys()].map((i) => (
        <div className="widget-info">
          <button>Popup {i}</button>
          <div>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Assumenda,
            minus.
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
