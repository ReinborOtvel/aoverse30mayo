"use strict";
export default function () {
  sketch.utils = {};
  sketch.utils.percentage = {};
  sketch.utils.percentage.get = (size, percentage) => {
    const one = size / 100;
    return parseInt(percentage / one);
  };
  sketch.utils.percentage.set = (size, number) => {
    const one = size / 100;
    return one * number;
  };
  sketch.utils.text = (x, y, size, text, color) => {
    x = sketch.utils.percentage.set(sketch.engine.width, x);
    y = sketch.utils.percentage.set(sketch.engine.height, y);
    size = sketch.utils.percentage.set(sketch.engine.width, size);
    sketch.engine.textSize(size);
    sketch.engine.fill(color);
    sketch.engine.text(text, x, y);
  };
  sketch.utils.rect = (x, y, width, height, color) => {
    x = sketch.utils.percentage.set(sketch.engine.width, x);
    y = sketch.utils.percentage.set(sketch.engine.height, y);
    width = sketch.utils.percentage.set(sketch.engine.width, width);
    height = sketch.utils.percentage.set(sketch.engine.height, height);
    sketch.engine.fill(color);
    sketch.engine.rect(x, y, width, height);
  };
  sketch.utils.image = (image, x, y, width, height) => {
    x = sketch.utils.percentage.set(sketch.engine.width, x);
    y = sketch.utils.percentage.set(sketch.engine.height, y);
    width = sketch.utils.percentage.set(sketch.engine.width, width);
    height = sketch.utils.percentage.set(sketch.engine.height, height);
    sketch.engine.image(image, x, y, width, height);
  };
};