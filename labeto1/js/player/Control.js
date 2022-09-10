"use strict";
import text from "../text.js";
import Parts from "./Parts.js";
import verifyClick from "../verifyClick.js";
export default class {
  constructor(transform, statistics, map, fullLoad) {
    this.transform = {};
    this.transform.x = transform.x;
    this.transform.y = transform.y;
    this.transform.width = transform.width;
    this.transform.height = transform.height;
    this.statistics = statistics;
    this.map = map;
    this.fullLoad = fullLoad;
    this.setParts();
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
    this.transform.x = x;
    this.transform.y = y;
    this.transform.width = width;
    this.transform.height = height;
    this.parts.setTransform(x, y, width, height);
  }
  move() {
    let newX = this.transform.x;
    let newY = this.transform.y;
    let xSpeed = this.xMove * this.speed;
    let ySpeed = this.yMove * this.speed;
    if (xSpeed != 0 || ySpeed != 0) {
      newX += xSpeed;
      newY += ySpeed;
      if (this.map.collision(newX, newY) == false) {
        this.setTransform(newX, newY, this.transform.width, this.transform.height);
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