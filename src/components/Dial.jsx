import React, { useState } from "react";
import "css/dial.css";

const Dial = () => {
  const [quad, setQuad] = useState(0);
  return (
    <div
      className="dial"
      onClick={() => setQuad((cur) => (cur + 1) % 4)}
      style={{
        backgroundImage: `linear-gradient(${
          -90 + 90 * quad
        }deg, transparent 50%, white 50%), linear-gradient(${
          90 * quad
        }deg, white 50%, transparent 50%)`,
      }}
    />
  );
};

export default Dial;
