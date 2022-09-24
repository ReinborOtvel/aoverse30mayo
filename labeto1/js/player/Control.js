"use strict";
import Parts from "./Parts.js";
export default class {
  constructor(x, y, width, height, statistics, map) {
    this.setTransform(x, y, width, height);
    this.statistics = statistics;
    this.map = map;
    this.parts = new Parts(this.x, this.y, this.width, this.height, statistics);
    this.xMove = 0;
    this.yMove = 0;
    this.speed = 1;
  }
  afterY(entity) {
    let y = entity.y + entity.height;
    return y > this.y;
  }
  setTransform(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  animationMove() {
    if (this.yMove == 0 && this.xMove == 0) {
      this.parts.canNextSprite(false);
    } else {
      this.parts.canNextSprite(true);
      if (this.yMove == -1) {
        this.parts.animation("up");
      } else if (this.yMove == 1) {
        this.parts.animation("down");
      } else if (this.xMove == -1) {
        this.parts.animation("left");
      } else if (this.xMove == 1) {
        this.parts.animation("right");
      }
    }
  }
  touchStarted() {
    this.touchMoved();
  }
  touchMoved() {
    if (touch.verify(3, 73, 8, 82)) {
      this.xMove = -1;
      this.yMove = 0;
    } else if (touch.verify(5, 64, 10, 73)) {
      this.xMove = -1;
      this.yMove = -1;
    } else if (touch.verify(10, 61, 15, 70)) {
      this.xMove = 0;
      this.yMove = -1;
    } else if (touch.verify(14, 63, 19, 72)) {
      this.xMove = 1;
      this.yMove = -1;
    } else if (touch.verify(17, 73, 22, 82)) {
      this.xMove = 1;
      this.yMove = 0;
    } else if (touch.verify(14, 83, 19, 92)) {
      this.xMove = 1;
      this.yMove = 1;
    } else if (touch.verify(10, 85, 15, 94)) {
      this.xMove = 0;
      this.yMove = 1;
    } else if (touch.verify(5, 81, 10, 90)) {
      this.xMove = -1;
      this.yMove = 1;
    }
    this.animationMove();
  }
  touchEnded() {
    if (touch.verify(10, 73, 15, 82)) {
      this.xMove = 0;
      this.yMove = 0;
    }
    this.animationMove();
  }
  keyMove() {
    if (key.key == "w") {
      this.yMove = -1;
    } else if (key.key == "s") {
      this.yMove = 1;
    } else if (key.key == "a") {
      this.xMove = -1;
    } else if (key.key == "d") {
      this.xMove = 1;
    }
    this.animationMove();
  }
  keyStop() {
    if (key.key == "w" || key.key == "s") {
      this.yMove = 0;
    } else if (key.key == "a" || key.key == "d") {
      this.xMove = 0;
    }
    this.animationMove();
  }
  move() {
    let xSpeed = this.xMove * this.speed;
    let ySpeed = this.yMove * this.speed;
    if (xSpeed != 0 || ySpeed != 0) {
      let newX = this.x + xSpeed;
      let newY = this.y + ySpeed;
      if (!this.map.collision(newX, newY)) {
        this.setTransform(newX, newY, this.width, this.height);
        this.parts.setTransform(this.x, this.y, this.width, this.height);
      }
    }
  }
  draw() {
    this.move();
  }
}