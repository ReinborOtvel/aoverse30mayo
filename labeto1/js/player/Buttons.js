"use strict";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.setImg();
    this.x = 68;
    this.y = 66;
    this.width = 30;
    this.height = 30;
  }
  setImg() {
    let url = "./Graficos/interface/buttons.png";
    engine.loadImage(url, img => {
      this.img = img;
      this.fullLoad();
    });
  }
  draw() {
    utils.image(this.img, this.x, this.y, this.width, this.height);
  }
}