"use strict";
import _percentageSet from "./percentage/set.js";
export default function (_x, _y, _width, _height, _color) {
  _x = _percentageSet(engine.width, _x);
  _y = _percentageSet(engine.height, _y);
  _width = _percentageSet(engine.width, _width);
  _height = _percentageSet(engine.height, _height);
  engine.fill(_color);
  engine.rect(_x, _y, _width, _height);
};