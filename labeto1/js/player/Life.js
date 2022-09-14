"use strict";
export default class {
  constructor() {
    this.percentage = 100;
    this.width = 35 / 100;
  }
  draw() {
    engine.noStroke();
    let width = parseInt(this.width * 100);
    utils.rect(30, 85, width, 4, "#000");
    width = parseInt(this.width * this.percentage);
    utils.rect(30, 85, width, 4, "#EA2825");
  }
}