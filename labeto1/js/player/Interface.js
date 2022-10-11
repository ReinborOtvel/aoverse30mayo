"use strict";
import Parts from "./Parts.js";
export default class {
  constructor(x, y, width, height, statistics) {
    this.statistics = statistics;
    this.parts = new Parts(x, y, width, height, this.statistics);
  }
  setTransform({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  newAnimation({ animation }) {
    if (animation != this.animation) {
      this.animation = animation;
      this.sprite = 0;
    }
  }
  draw() {
    this.parts.draw();
  }
}