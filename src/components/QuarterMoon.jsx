import React from "react";
import "css/dial.css";

const colors = ["#F77275", "#F9B835", "#3CD2A1", "#AA49CF"];

const QuarterMoon = (props) => {
  const { quad, setQuad } = props;
  return (
    <div
      className="dial"
      onClick={() => setQuad((cur) => (cur + 1) % 4)}
      style={{
        backgroundColor: colors[quad],
        backgroundImage: `linear-gradient(${
          -90 + 90 * quad
        }deg, transparent 50%, white 50%), linear-gradient(${
          90 * quad
        }deg, white 50%, transparent 50%)`,
      }}
    />
  );
};

export default QuarterMoon;
