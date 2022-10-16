"use strict";
import percentage from "./percentage.js";
export default function (image, x, y, width, height) {
  x = percentage(engine.width, x);
  y = percentage(engine.height, y);
  width = percentage(engine.width, width);
  height = percentage(engine.height, height);
  engine.image(image, x, y, width, height);
}