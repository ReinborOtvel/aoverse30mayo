"use strict";
import Parts from "./Parts.js";
export default class {
  constructor(x, y, width, height, statistics) {
    this.statistics = statistics;
    this.parts = new Parts(x, y, width, height, this.statistics);
  }
  draw() {
    this.parts.draw();
  }
}