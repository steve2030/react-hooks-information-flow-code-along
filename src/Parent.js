

import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FFFF00");


  function updateColor(newChildColor) {
    const newColor = getRandomColor();
    setColor(newColor);
    setChildrenColor(newChildColor)
  }
  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={updateColor} color={childrenColor} />
      <Child onChangeColor={updateColor} color={childrenColor} />
    </div>
  );
}

export default Parent;
