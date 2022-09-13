"use strict";
import porcentageWidth from "./porcentageWidth.js";
import porcentageHeight from "./porcentageHeight.js";
export default function (text, x, y, size, color) {
  engine.textSize(porcentageWidth(size));
  engine.fill(color);
  engine.text(text, porcentageWidth(x), porcentageHeight(y));
}