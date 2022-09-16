"use strict";
export default class {
  constructor() {
    this.percentage = 5;
    this.width = 35 / 100;
    setInterval(() => {
      if (this.percentage >= 5) {
        this.percentage -= 5;
      }
    }, 2000);
  }
  touchStarted() {
    if (utils.verifyClick(78, 60, 87, 74)) {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        if (this.percentage <= 95) {
          this.percentage += 5;
        }
      }, 500);
    }
  }
  touchEnded() {
    clearInterval(this.interval);
  }
  keyTyped() {
    if (events.key == "e") {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        if (this.percentage <= 95) {
          this.percentage += 5;
        }
      }, 500);
    }
  }
  keyReleased() {
    if (events.key == "e") {
      clearInterval(this.interval);
    }
  }
  draw() {
    engine.noStroke();
    let width = parseInt(this.width * 100);
    utils.rect(30, 90, width, 4, "#000");
    width = parseInt(this.width * this.percentage);
    utils.rect(30, 90, width, 4, "#258DEA");
  }
}