"use strict";
import percentageSet from "./percentage/set.js";
export default function (image, x, y, width, height) {
  x = percentageSet(window.engine.width, x);
  y = percentageSet(window.engine.height, y);
  width = percentageSet(window.engine.width, width);
  height = percentageSet(window.engine.height, height);
  window.engine.image(image, x, y, width, height);
}