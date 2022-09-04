"use strict";
export default function (text, x, y, size, color) {
  engine.textSize(size);
  engine.fill(color);
  engine.text(text, x, y);
}