"use strict";
import percentageSet from "./percentage/set.js";
export default function (x, y, width, height, color) {
  x = percentageSet(window.engine.width, x);
  y = percentageSet(window.engine.height, y);
  width = percentageSet(window.engine.width, width);
  height = percentageSet(window.engine.height, height);
  window.engine.fill(color);
  window.engine.rect(x, y, width, height);
}