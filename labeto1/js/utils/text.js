"use strict";
export default function (text, x, y, size, color) {
  size = utils.percentageWidth(size);
  engine.textSize(size);
  engine.fill(color);
  x = utils.percentageWidth(x);
  y = utils.percentageHeight(y);
  engine.text(text, x, y);
}