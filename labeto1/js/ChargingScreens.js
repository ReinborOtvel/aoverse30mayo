"use strict";
import text from "./text.js";
import porcentageWidth from "./porcentageWidth.js";
import porcentageHeight from "./porcentageHeight.js";
export default class {
  setup() {
    this.index = 1;
    this.images = [];
    this.length = 14;
    for (let i = this.index; i <= this.length; i++) {
      let src = `./Graficos/chargingScreens/${i}.jpg`;
      this.images[i] = engine.loadImage(src);
    }
    this.interval = setInterval(() => {
      if (this.index < this.length) {
        this.index++;
      } else {
        clearInterval(this.interval);
        data.metamask.start();
      }
    }, 1000);
    data.canDraw = true;
  }
  click() {
    if (this.index < this.length) {
      this.index = this.length;
    }
  }
  draw() {
    let image = this.images[this.index];
    if (image != undefined) {
      engine.image(image, 0, 0, engine.width, engine.height);
    }
    text("click to omit", 63, 90, 5, "#fff");
  }
}