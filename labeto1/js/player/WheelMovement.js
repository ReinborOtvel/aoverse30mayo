"use strict";
export default class {
  constructor() {
    this.x = 15;
    this.y = 75;
  }
  position(xMove, yMove) {
    if (xMove == 0) {
      this.x = 15;
    } else if (xMove == -1) {
      this.x = 7;
    } else if (xMove == 1) {
      this.x = 23;
    }
    if (yMove == 0) {
      this.y = 75;
    } else if (yMove == -1) {
      this.y = 62;
    } else if (yMove == 1) {
      this.y = 88;
    }
  }
  draw() {
    engine.noFill();
    engine.stroke("#fff");
    utils.circle(15, 75, 25);
    engine.fill("#fff");
    engine.stroke("#000");
    utils.circle(this.x, this.y, 5);
  }
}