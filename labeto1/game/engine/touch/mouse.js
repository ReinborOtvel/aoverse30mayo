"use strict";
import percentageGet from "../../utils/percentage/get.js";
export default function () {
  let x = percentageGet(window.engine.width, window.engine.mouseX);
  let y = percentageGet(window.engine.height, window.engine.mouseY);
  return { x, y };
}