"use strict";
import percentageSet from "./percentage/set.js";
export default function (_x, _y, _size, _text, _color) {
  _x = percentageSet(engine.width, _x);
  _y = percentageSet(engine.height, _y);
  _size = percentageSet(engine.width, _size);
  engine.textSize(_size);
  engine.fill(_color);
  engine.text(_text, _x, _y);
};