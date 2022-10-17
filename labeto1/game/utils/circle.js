"use strict";
import percentageSet from "./percentage/set.js";
export default function (x, y, diameter) {
  x = percentageSet(window.engine.width, x);
  y = percentageSet(window.engine.height, y);
  diameter = percentageSet(window.engine.width, diameter);
  window.engine.circle(x, y, diameter);
}