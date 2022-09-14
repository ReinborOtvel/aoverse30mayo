"use strict";
export default function (_text, x, y, width) {
  let height = 6;
  let size = 5;
  utils.rect(x, y, width, height, "#000");
  utils.text(_text, x, y + size, size, "#fff");
}