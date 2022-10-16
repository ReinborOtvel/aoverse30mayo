"use strict";
import percentage from "./percentage.js";
export default function (x, y, diameter) {
  x = percentage(window.engine.width, x);
  y = percentage(window.engine.height, y);
  diameter = percentage(window.engine.width, diameter);
  window.engine.circle(x, y, diameter);
}