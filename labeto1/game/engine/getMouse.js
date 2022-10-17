"use strict";
import getPercentage from "../utils/getPercentage.js";
export default function () {
  let x = getPercentage(window.engine.width, window.engine.mouseX);
  let y = getPercentage(window.engine.height, window.engine.mouseY);
  return { x, y };
}