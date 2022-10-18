"use strict";
import rect from "../utils/rect.js";
export default function () {
  if (!canDraw) return;
  engine.noSmooth();
  rect(0, 0, 100, 100, "#111");
  leader.draw();
  leaders.draw();
};