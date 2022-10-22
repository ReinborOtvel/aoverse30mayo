"use strict";
import _percentageSet from "./percentage/set.js";
export default function (_image, _x, _y, _width, _height) {
  _x = _percentageSet(engine.width, _x);
  _y = _percentageSet(engine.height, _y);
  _width = _percentageSet(engine.width, _width);
  _height = _percentageSet(engine.height, _height);
  engine.image(_image, _x, _y, _width, _height);
};