"use strict";
import percentageSet from "./percentage/set.js";
export default function (_image, _x, _y, _width, _height) {
  _x = percentageSet(engine.width, _x);
  _y = percentageSet(engine.height, _y);
  _width = percentageSet(engine.width, _width);
  _height = percentageSet(engine.height, _height);
  engine.image(_image, _x, _y, _width, _height);
};