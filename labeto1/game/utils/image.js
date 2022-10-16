"use strict";
import percentage from "./percentage.js";
export default function (image, x, y, width, height) {
  x = percentage(window.engine.width, x);
  y = percentage(window.engine.height, y);
  width = percentage(window.engine.width, width);
  height = percentage(window.engine.height, height);
  window.engine.image(image, x, y, width, height);
}