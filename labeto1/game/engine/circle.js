"use strict";
import percentage from "./percentage.js";
export default function (x, y, diameter) {
  x = percentage(engine.width, x);
  y = percentage(engine.height, y);
  diameter = percentage(engine.width, diameter);
  engine.circle(x, y, diameter);
}