"use strict";
import percentageSet from "./percentage/set.js";
export default function (_x, _y, _width, _height, _color) {
  _x = percentageSet(engine.width, _x);
  _y = percentageSet(engine.height, _y);
  _width = percentageSet(engine.width, _width);
  _height = percentageSet(engine.height, _height);
  engine.fill(_color);
  engine.rect(_x, _y, _width, _height);
};