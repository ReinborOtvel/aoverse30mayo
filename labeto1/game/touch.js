"use strict";
import _percentageGet from "./utils/percentage/get.js";
export default function () {
  sketch.touch = {};
  const _touch = sketch.touch;
  _touch.set = () => {
    _touch.x = _percentageGet(engine.width, engine.mouseX);
    _touch.y = _percentageGet(engine.height, engine.mouseY);
  };
  _touch.verify = (_xInit, _yInit, _xEnd, _yEnd) => {
    return _touch.x >= _xInit && _touch.y >= _yInit &&
      _touch.x <= _xEnd && _touch.y <= _yEnd;
  };
};