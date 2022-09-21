"use strict";
import Percentage from "./Percentage.js";
export default class {
  constructor(x, y, width, height, color) {
    this.x = Percentage.getWidth(x);
    this.y = Percentage.getHeight(y);
    this.width = Percentage.getWidth(width);
    this.height = Percentage.getHeight(height);
    this.color = color;
  }
  draw() {
    engine.fill(this.color);
    engine.rect(this.x, this.y, this.width, this.height);
  }
}