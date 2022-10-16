"use strict";
export default function (x, y, width, height, color) {
  x = global.Percentage(engine.width, x);
  y = global.Percentage(engine.height, y);
  width = global.Percentage(engine.width, width);
  height = global.Percentage(engine.height, height);
  engine.fill(color);
  engine.rect(x, y, width, height);
}