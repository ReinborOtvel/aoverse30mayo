"use strict";
import percentageSet from "./percentage/set.js";
export default function (_x, _y, _diameter) {
  _x = percentageSet(engine.width, _x);
  _y = percentageSet(engine.height, _y);
  _diameter = percentageSet(engine.width, _diameter);
  engine.circle(_x, _y, _diameter);
};