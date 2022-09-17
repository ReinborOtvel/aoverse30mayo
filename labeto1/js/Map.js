"use strict";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.level = [
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
      [579, 579, 579, 579, 579, 579, 579, 579, 579, 579],
    ];
    this.imgs();
  }
  imgs() {
    this.imgs = {};
    engine.loadImage("./graphics/nature/579.png", img => {
      this.imgs[579] = img;
      this.fullLoad();
    });
  }
  draw() {
    for (let h = 0; h < 10; h++) {
      for (let v = 0; v < 10; v++) {
        let index = this.level[h][v];
        let width = 10;
        let height = 10;
        let x = width * h;
        let y = height * v;
        utils.image(this.imgs[index], x, y, width, height);
      }
    }
  }
}