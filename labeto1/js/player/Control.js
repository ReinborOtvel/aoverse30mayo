"use strict";
import Parts from "./Parts.js";
export default class {
  constructor(x, y, width, height, statistics, map) {
    this.transform = { x, y, width, height };
    this.statistics = statistics;
    this.map = map;
    this.parts = new Parts(x, y, width, height, this.statistics);
    this.xMove = 0;
    this.yMove = 0;
    this.speed = 1;
  }
  changeMotion(x, y) {
    this.xMove = x;
    this.yMove = y;
    this.animationMove();
  }
  animationMove() {
    if (this.yMove == 0 && this.xMove == 0) {
      this.parts.setCanNextSprite(false);
    } else {
      this.parts.setCanNextSprite(true);
      if (this.yMove == -1) {
        this.parts.setAnimation("up");
      }
      else if (this.yMove == 1) {
        this.parts.setAnimation("down");
      }
      else if (this.xMove == -1) {
        this.parts.setAnimation("left");
      }
      else if (this.xMove == 1) {
        this.parts.setAnimation("right");
      }
    }
  }
  touchStarted() {
    this.touchMoved();
  }
  touchMoved() {

  }
  touchEnded() {
    this.changeMotion(0, 0);
  }
  keyTyped() {
    switch (events.key) {
      case "w":
        this.changeMotion(this.xMove, -1);
        break;
      case "s":
        this.changeMotion(this.xMove, 1);
        break;
      case "a":
        this.changeMotion(-1, this.yMove);
        break;
      case "d":
        this.changeMotion(1, this.yMove);
        break;
    }
  }
  keyReleased() {
    switch (events.key) {
      case "w":
      case "s":
        this.changeMotion(this.xMove, 0);
        break;
      case "a":
      case "d":
        this.changeMotion(0, this.yMove);
        break;
    }
  }
  setTransform(x, y, width, height) {
    this.transform = { x, y, width, height };
    this.parts.setTransform(x, y, width, height);
  }
  move() {
    let xSpeed = this.xMove * this.speed;
    let ySpeed = this.yMove * this.speed;
    if (xSpeed != 0 || ySpeed != 0) {
      let { x, y, width, height } = this.transform;
      x += xSpeed;
      y += ySpeed;
      if (this.map.collision(x, y) == false) {
        this.setTransform(x, y, width, height);
      }
    }
  }
  draw() {
    this.parts.draw();
    this.move();
  }
}