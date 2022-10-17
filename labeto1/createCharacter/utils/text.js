"use strict";
import percentageSet from "./percentage/set.js";
export default function (x, y, size, text, color) {
  x = percentageSet(window.engine.width, x);
  y = percentageSet(window.engine.height, y);
  size = percentageSet(window.engine.width, size);
  window.engine.textSize(size);
  window.engine.fill(color);
  window.engine.text(text, x, y);
}