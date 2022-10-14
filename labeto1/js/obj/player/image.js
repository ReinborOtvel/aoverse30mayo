"use strict";
export default class {
  constructor(x, y, width, height, statistics) {
    this.statistics = statistics;
    this.parts = new window.data.obj.player.parts(x, y, width, height, this.statistics);
  }
  draw() {
    this.parts.draw();
  }
}