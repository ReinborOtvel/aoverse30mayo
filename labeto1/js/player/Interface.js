"use strict";
import Parts from "./Parts.js";
export default class {
  constructor() {
    this.parts = new Parts(this);
  }
  setup({ x, y, width, height, statistics }) {
    this.setTransform({ x, y, width, height });
    this.statistics = statistics;
    this.animation = "down";
    this.sprite = 0;
    this.parts.setup();
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