"use strict";
export default class {
  constructor(map) {
    this.map = map;
    this.xMove = 0;
    this.yMove = 0;
    this.speed = 1;
  }
  animationMove() {
    if (this.yMove == 0 && this.xMove == 0) {
      return false;
    } else {
      if (this.yMove == -1) {
        return "up";
      } else if (this.yMove == 1) {
        return "down";
      } else if (this.xMove == -1) {
        return "left";
      } else if (this.xMove == 1) {
        return "right";
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
  }
  touchEnded() {
    if (touch.verify(10, 73, 15, 82)) {
      this.xMove = 0;
      this.yMove = 0;
    }
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
  }
  keyStop() {
    if (key.key == "w" || key.key == "s") {
      this.yMove = 0;
    } else if (key.key == "a" || key.key == "d") {
      this.xMove = 0;
    }
  }
  move() {
    let xSpeed = this.xMove * this.speed;
    let ySpeed = this.yMove * this.speed;
    if (xSpeed != 0 || ySpeed != 0) {
      let newX = this.x + xSpeed;
      let newY = this.y + ySpeed;
      if (!this.map.collision(newX, newY)) {
        this.x = newX;
        this.y = newY;
      }
    }
  }
}