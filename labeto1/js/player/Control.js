"use strict";
export default class {
  constructor(map) {
    this.map = map;
    this.canNextSprite = false;
    this.xMove = 0;
    this.yMove = 0;
    this.speed = 1;
  }
  animationMove() {
    if (this.yMove == 0 && this.xMove == 0) {
      this.canNextSprite = false;
    } else {
      this.canNextSprite = true;
      if (this.yMove == -1) {
        this.setAnimation("up");
      } else if (this.yMove == 1) {
        this.setAnimation("down");
      } else if (this.xMove == -1) {
        this.setAnimation("left");
      } else if (this.xMove == 1) {
        this.setAnimation("right");
      }
    }
  }
  touchStarted() {
    this.touchMoved();
  }
  touchMoved() {
    if (utils.verifyClick(3, 73, 8, 82)) {
      this.xMove = -1;
      this.yMove = 0;
    } else if (utils.verifyClick(5, 64, 10, 73)) {
      this.xMove = -1;
      this.yMove = -1;
    } else if (utils.verifyClick(10, 61, 15, 70)) {
      this.xMove = 0;
      this.yMove = -1;
    } else if (utils.verifyClick(14, 63, 19, 72)) {
      this.xMove = 1;
      this.yMove = -1;
    } else if (utils.verifyClick(17, 73, 22, 82)) {
      this.xMove = 1;
      this.yMove = 0;
    } else if (utils.verifyClick(14, 83, 19, 92)) {
      this.xMove = 1;
      this.yMove = 1;
    } else if (utils.verifyClick(10, 85, 15, 94)) {
      this.xMove = 0;
      this.yMove = 1;
    } else if (utils.verifyClick(5, 81, 10, 90)) {
      this.xMove = -1;
      this.yMove = 1;
    }
    this.animationMove();
  }
  touchEnded() {
    if (utils.verifyClick(10, 73, 15, 82)) {
      this.xMove = 0;
      this.yMove = 0;
      this.animationMove();
    }
  }
  keyMove() {
    if (events.key == "w") {
      this.yMove = -1;
    } else if (events.key == "s") {
      this.yMove = 1;
    } else if (events.key == "a") {
      this.xMove = -1;
    } else if (events.key == "d") {
      this.xMove = 1;
    } else {
      return;
    }
    this.animationMove();
  }
  keyStop() {
    if (events.key == "w" || events.key == "s") {
      this.yMove = 0;
    } else if (events.key == "a" || events.key == "d") {
      this.xMove = 0;
    } else {
      return;
    }
    this.animationMove();
  }
  move() {
    let xSpeed = this.xMove * this.speed;
    let ySpeed = this.yMove * this.speed;
    if (xSpeed != 0 || ySpeed != 0) {
      let newX = this.entity.x + xSpeed;
      let newY = this.entity.y + ySpeed;
      if (!this.map.collision(newX, newY)) {
        this.entity.x = newX;
        this.entity.y = newY;
      }
    }
  }
  draw() {
    this.move();
  }
}