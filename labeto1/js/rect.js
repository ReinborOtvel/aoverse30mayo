"use strict";
import porcentageWidth from "./porcentageWidth.js";
import porcentageHeight from "./porcentageHeight.js";
export default function (x, y, width, height, color) {
  engine.fill(color);
  x = porcentageWidth(x);
  y = porcentageHeight(y);
  width = porcentageWidth(width);
  height = porcentageHeight(height);
  engine.rect(x, y, width, height);
}