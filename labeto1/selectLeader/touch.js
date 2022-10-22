"use strict";
export default function () {
  sketch.touch = {};
  sketch.touch.set = () => {
    sketch.touch.x = sketch.utils.percentage.get(sketch.engine.width, sketch.engine.mouseX);
    sketch.touch.y = sketch.utils.percentage.get(sketch.engine.height, sketch.engine.mouseY);
  };
  sketch.touch.verify = (xInit, yInit, xEnd, yEnd) => {
    return sketch.touch.x >= xInit && sketch.touch.y >= yInit && sketch.touch.x <= xEnd && sketch.touch.y <= yEnd;
  };
};