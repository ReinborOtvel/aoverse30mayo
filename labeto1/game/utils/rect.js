"use strict";
import percentage from "./percentage.js";
export default function (x, y, width, height, color) {
  x = percentage(window.engine.width, x);
  y = percentage(window.engine.height, y);
  width = percentage(window.engine.width, width);
  height = percentage(window.engine.height, height);
  window.engine.fill(color);
  window.engine.rect(x, y, width, height);
}