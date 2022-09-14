"use strict";
export default function (x, y, width, height, color) {
  engine.fill(color);
  x = utils.percentageWidth(x);
  y = utils.percentageHeight(y);
  width = utils.percentageWidth(width);
  height = utils.percentageHeight(height);
  engine.rect(x, y, width, height);
}