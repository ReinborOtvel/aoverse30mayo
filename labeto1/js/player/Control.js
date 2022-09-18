"use strict";
export default class {
  constructor(entity) {
    this.entity = entity;
    this.map = this.entity.map;
    this.parts = this.entity.parts;
    this.xMove = 0;
    this.yMove = 0;
    this.speed = 1;
  }
  animationMove() {
    if (this.yMove == 0 && this.xMove == 0) {
      this.parts.canNextSprite = false;
    } else {
      this.parts.canNextSprite = true;
      if (this.yMove == -1) {
        this.parts.setAnimation("up");
      } else if (this.yMove == 1) {
        this.parts.setAnimation("down");
      } else if (this.xMove == -1) {
        this.parts.setAnimation("left");
      } else if (this.xMove == 1) {
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
    this.xMove = 0;
    this.yMove = 0;
    this.animationMove();
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