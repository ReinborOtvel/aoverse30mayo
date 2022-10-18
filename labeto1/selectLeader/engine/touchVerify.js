"use strict";
import percentageGet from "../utils/percentage/get.js";
export default function (_xInit, _yInit, _xEnd, _yEnd) {
  const _x = percentageGet(engine.width, engine.mouseX);
  const _y = percentageGet(engine.height, engine.mouseY);
  return _x >= _xInit && _y >= _yInit && _x <= _xEnd && _y <= _yEnd;
};