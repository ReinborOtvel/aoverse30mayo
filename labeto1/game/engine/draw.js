"use strict";
export default function () {
  if (!canDraw) return;
  engine.noSmooth();
  Rect(0, 0, 100, 100, "#111");
  player.draw();
};