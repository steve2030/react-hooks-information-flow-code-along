import React from "react";
import { getRandomColor } from "./randomColorGenerator.js";

function Child({ onChangeColor, color }) {
  function handleColor() {
    const newColor = getRandomColor();
    onChangeColor(newColor);
  }
  return <div

  className="child"
   style={{ backgroundColor: color}}
  onClick={handleColor}
  />;
}

export default Child;
