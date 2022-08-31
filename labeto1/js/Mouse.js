"use strict";
export default class {
  constructor() {
    this.x = 320;
    this.y = 180;
    this.mouse = engine.loadImage("./Graficos/MouseIcons");
  }
  draw() {
    this.x += engine.movedX;
    this.y += engine.movedY;
    engine.image(this.mouse, this.x, this.y, 50, 50);
  }
}