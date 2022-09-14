"use strict";
export default class {
  constructor() {
    this.percentage = 100;
    this.width = 17 / 100;
    setInterval(() => {
      this.percentage -= 10;
    }, 60000);
  }
  draw() {
    engine.noStroke();
    let width = parseInt(this.width * 100);
    utils.rect(48, 90, width, 4, "#000");
    width = parseInt(this.width * this.percentage);
    utils.rect(48, 90, width, 4, "#EA5E25");
  }
}