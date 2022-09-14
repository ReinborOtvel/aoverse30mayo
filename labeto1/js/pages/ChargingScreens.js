"use strict";
export default class {
  setup() {
    this.index = 1;
    this.images = [];
    this.length = 14;
    for (let i = this.index; i <= this.length; i++) {
      let src = `./Graficos/interface/chargingScreens/${i}.jpg`;
      engine.loadImage(src, img => {
        this.images[i] = img;
      });
    }
    this.interval = setInterval(() => {
      if (this.index < this.length) {
        this.index++;
      } else {
        clearInterval(this.interval);
        metamask.start();
      }
    }, 1000);
    data.canDraw = true;
  }
  touchEnded() {
    if (this.index < this.length) {
      this.index = this.length;
    }
  }
  draw() {
    let img = this.images[this.index];
    if (img != undefined) {
      utils.image(img, 0, 0, 100, 100);
    }
    utils.text("click to omit", 63, 90, 5, "#fff");
  }
}