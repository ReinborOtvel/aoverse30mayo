"use strict";
import getPercentage from "../utils/getPercentage.js";
export default function () {
  if (!window.canDraw) return;
  let x = getPercentage(window.engine.width, window.engine.mouseX);
  let y = getPercentage(window.engine.height, window.engine.mouseY);
  let Verify = (xInit, yInit, xEnd, yEnd) => {
    return x >= xInit &&
      y >= yInit &&
      x <= xEnd &&
      y <= yEnd;
  }
  window.player.mouseReleased();
  console.log(x, y);
}