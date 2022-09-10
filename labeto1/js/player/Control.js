"use strict";
import text from "../text.js";
import Parts from "./Parts.js";
import verifyClick from "../verifyClick.js";
export default class {
  constructor(transform, statistics, callback) {
    this.transform = transform;
    this.statistics = statistics;
    this.parts = new Parts(transform, statistics, callback);
    this.xMove = 0;
    this.yMove = 0;
    this.speed = 3;
  }
  click() {
    if (verifyClick(56, 262, 85, 284)) {
      this.yMove = -1;
      this.parts.animation("up");
    } else if (verifyClick(57, 321, 76, 343)) {
      this.yMove = 1;
      this.parts.animation("down");
    } if (verifyClick(18, 293, 38, 312)) {
      this.xMove = -1;
      this.parts.animation("left");
    } else if (verifyClick(97, 86, 117, 312)) {
      this.xMove = 1;
      this.parts.animation("right");
    }
    if (this.yMove != 0 || this.xMove != 0) {
      this.parts.canNextSprite(true);
    }
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
      this.parts.canNextSprite(true);
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
      this.parts.canNextSprite(false);
    } else if (this.yMove == -1) {
      this.parts.animation("up");
    } else if (this.yMove == 1) {
      this.parts.animation("down");
    } else if (this.xMove == -1) {
      this.parts.animation("left");
    } else if (this.xMove == 1) {
      this.parts.animation("right");
    }
  }
  move() {
    let { x, y } = this.transform;
    let xSpeed = this.xMove * this.speed;
    let ySpeed = this.yMove * this.speed;
    if (xSpeed != 0 || ySpeed != 0) {
      x += xSpeed;
      y += ySpeed;
      if (page.map.collision(x, y) == false) {
        this.transform.x = x;
        this.transform.y = y;
        this.parts.setTransform(this.transform);
      }
    }
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