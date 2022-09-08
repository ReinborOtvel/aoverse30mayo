"use strict";
import text from "../text.js";
import Parts from "./Parts.js";
export default class {
  constructor(transform, statistics, callback) {
    this.transform = transform;
    this.parts = new Parts(transform, statistics, callback);
    this.xMove = 0;
    this.yMove = 0;
    this.speed = 3;
  }
  click() {
  }
  keydown() {
    switch (data.keydown) {
      case "w":
        this.yMove = -1;
        this.parts.animation("up");
        break;
      case "s":
        this.yMove = 1;
        this.parts.animation("down");
        break;
      case "a":
        this.xMove = -1;
        this.parts.animation("left");
        break;
      case "d":
        this.xMove = 1;
        this.parts.animation("right");
        break;
    }
    if (this.yMove != 0 || this.xMove != 0) {
      this.parts.nextIntervalSprite = true;
    }
  }
  keyup() {
    switch (data.keyup) {
      case "w":
      case "s": this.yMove = 0; break;
      case "a":
      case "d": this.xMove = 0; break;
    }
    if (this.yMove == 0 && this.xMove == 0) {
      this.parts.nextIntervalSprite = false;
    }
  }
  move() {
    let { x, y } = this.transform;
    x += this.xMove * this.speed;
    y += this.yMove * this.speed;
    this.transform.x = x;
    this.transform.y = y;
    this.parts.setTransform(this.transform);
  }
  draw() {
    this.parts.draw();
    this.move();
    text("a", 20, 310, 30, "#fff");
    text("w", 60, 280, 30, "#fff");
    text("s", 60, 340, 30, "#fff");
    text("d", 100, 310, 30, "#fff");
  }
}