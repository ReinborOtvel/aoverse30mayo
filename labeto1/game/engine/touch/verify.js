"use strict";
import mouse from "./mouse.js";
export default function (xInit, yInit, xEnd, yEnd) {
  let { x, y } = mouse();
  return x >= xInit && y >= yInit && x <= xEnd && y <= yEnd;
}