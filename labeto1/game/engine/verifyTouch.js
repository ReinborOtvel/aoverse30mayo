"use strict";
import getMouse from "./getMouse.js";
export default function (xInit, yInit, xEnd, yEnd) {
  let { x, y } = getMouse();
  return x >= xInit && y >= yInit && x <= xEnd && y <= yEnd;
}