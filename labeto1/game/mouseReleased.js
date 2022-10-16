"use strict";
export default function () {
  if (!canDraw) return;
  let x = GetPercentage(engine.width, engine.mouseX);
  let y = GetPercentage(engine.height, engine.mouseY);
  let Verify = (xInit, yInit, xEnd, yEnd) => {
    return x >= xInit &&
      y >= yInit &&
      x <= xEnd &&
      y <= yEnd;
  }
  player.mouseReleased();
  console.log(x, y);
}