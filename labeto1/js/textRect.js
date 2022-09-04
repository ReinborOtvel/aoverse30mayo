"use strict";
import rect from "./rect.js";
import text from "./text.js";
export default function (_text, x, y, width) {
  let height = 40;
  let size = 30;
  rect(x, y, width, height, "#000");
  text(_text, x, y + size, size, "#fff");
}