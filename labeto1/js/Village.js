"use strict";
export default class {
  constructor() {
    this.grass = engine.loadImage("./Graficos/ground/258.png");
  }
  draw() {
    engine.image(this.grass, 0, 0, 50, 50);
  }
}