"use strict";
export default function (x, y, size, text, color) {
  x = percentage(window.engine.width, x);
  y = percentage(window.engine.height, y);
  size = percentage(window.engine.width, size);
  window.engine.textSize(size);
  window.engine.fill(color);
  window.engine.text(text, x, y);
}