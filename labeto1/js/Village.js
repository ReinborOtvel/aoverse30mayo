"use strict";
export default class {
  constructor() {
    this.grass = engine.loadImage("./Graficos/ground/258.png");
  }
  draw() {
    for (let x = 0; x < 12; x++) {
      for (let y = 0; y < 7; y++) {
        engine.image(this.grass, 50 * x, 50 * y, 50, 50);
      }
    }
  }
}