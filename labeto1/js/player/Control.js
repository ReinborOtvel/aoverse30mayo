"use strict";
import text from "../text.js";
import Parts from "./Parts.js";
import verifyClick from "../verifyClick.js";
export default class {
  constructor(transform, statistics, map, fullLoad) {
    this.transform = transform;
    this.statistics = statistics;
    this.map = map;
    this.fullLoad = fullLoad;
    this.setParts();
    this.x = 2024;
    this.y = 1452;
    this.xMove = 0;
    this.yMove = 0;
    this.speed = 6;
  }
  setParts() {
    this.parts = new Parts(this.transform, this.statistics, this.fullLoad);
  }
  click() {
    if (verifyClick(56, 262, 85, 284)) {
      this.yMove = -1;
      this.parts.setAnimation("up");
    }
    else if (verifyClick(57, 321, 76, 343)) {
      this.yMove = 1;
      this.parts.setAnimation("down");
    }
    if (verifyClick(18, 293, 38, 312)) {
      this.xMove = -1;
      this.parts.setAnimation("left");
    }
    else if (verifyClick(97, 86, 117, 312)) {
      this.xMove = 1;
      this.parts.setAnimation("right");
    }
    if (this.yMove != 0 || this.xMove != 0) {
      this.parts.setCanNextSprite(true);
    }
  }
  keydown() {
    switch (data.keydown) {
      case "w":
        this.yMove = -1;
        this.parts.setAnimation("up");
        break;
      case "s":
        this.yMove = 1;
        this.parts.setAnimation("down");
        break;
      case "a":
        this.xMove = -1;
        this.parts.setAnimation("left");
        break;
      case "d":
        this.xMove = 1;
        this.parts.setAnimation("right");
        break;
    }
    if (this.yMove != 0 || this.xMove != 0) {
      this.parts.setCanNextSprite(true);
    }
  }
  keyup() {
    switch (data.keyup) {
      case "w":
      case "s":
        this.yMove = 0;
        break;
      case "a":
      case "d":
        this.xMove = 0;
        break;
    }
    if (this.yMove == 0 && this.xMove == 0) {
      this.parts.setCanNextSprite(false);
    }
    else if (this.yMove == -1) {
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
  setTransform(x, y, width, height) {
    this.transform = { x, y, width, height };
    this.parts.setTransform(x, y, width, height);
  }
  move() {
    let newX = this.x;
    let newY = this.y;
    let xSpeed = this.xMove * this.speed;
    let ySpeed = this.yMove * this.speed;
    if (xSpeed != 0 || ySpeed != 0) {
      newX += xSpeed;
      newY += ySpeed;
      if (this.map.collision(newX, newY) == false) {
        this.x = newX;
        this.y = newY;
      }
    }
  }
  draw() {
    this.parts.draw();
    this.move();
    text("a", 5, 90, 5, "#fff");
    text("w", 10, 85, 5, "#fff");
    text("s", 10, 95, 5, "#fff");
    text("d", 15, 90, 5, "#fff");
  }
}