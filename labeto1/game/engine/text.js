"use strict";
export default function (x, y, size, text, color) {
  x = global.Percentage(engine.width, x);
  y = global.Percentage(engine.height, y);
  size = global.Percentage(engine.width, size);
  engine.textSize(size);
  engine.fill(color);
  engine.text(text, x, y);
}