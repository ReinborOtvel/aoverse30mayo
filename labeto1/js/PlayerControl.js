"use strict";
import text from "./text.js";
import Player from "./Player.js";
export default class {
  constructor(transform, statistics, callback) {
    this.player = new Player(transform, statistics, callback);
    this.xMove = 0;
    this.yMove = 0;
    this.speed = 3;
  }
  click() {
  }
  keydown() {
    switch (data.keydown) {
      case "w": this.yMove = -1; break;
      case "s": this.yMove = 1; break;
      case "a": this.xMove = -1; break;
      case "d": this.xMove = 1; break;
    }
  }
  keyup() {
    switch (data.keyup) {
      case "w":
      case "s": this.yMove = 0; break;
      case "a":
      case "d": this.xMove = 0; break;
    }
  }
  move() {
    let { x, y } = this.player.transform;
    x += this.xMove * this.speed;
    y += this.yMove * this.speed;
    this.player.transform.x = x;
    this.player.transform.y = y;
  }
  draw() {
    this.player.draw();
    this.move();
    text("a", 20, 310, 30, "#fff");
    text("w", 60, 280, 30, "#fff");
    text("s", 60, 340, 30, "#fff");
    text("d", 100, 310, 30, "#fff");
  }
}