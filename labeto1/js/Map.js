"use strict";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.soil = [
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
    this.tree = [
      [-1, 1, -1, 1, -1],
      [-1, 1, -1, 1, -1],
      [-1, 1, -1, 1, -1],
      [-1, 1, -1, 1, -1],
      [-1, 1, -1, 1, -1],
    ];
    this.imgs();
  }
  imgs() {
    this.imgs = {};
    this.imgs[1] = engine.loadImage("./graphics/nature/1.png");
    this.imgs[579] = engine.loadImage("./graphics/nature/579.png");
    this.fullLoad();
  }
  drawSoil() {
    for (let h = 0; h < 10; h++) {
      for (let v = 0; v < 10; v++) {
        let index = this.soil[h][v];
        if (index == -1) continue;
        let width = 10;
        let height = 10;
        let x = width * h;
        let y = height * v;
        utils.image(this.imgs[index], x, y, width, height);
      }
    }
  }
  drawTree() {
    for (let h = 0; h < 5; h++) {
      for (let v = 0; v < 5; v++) {
        let index = this.tree[h][v];
        if (index == -1) continue;
        let width = 20;
        let height = 20;
        let x = width * h;
        let y = height * v;
        utils.image(this.imgs[index], x, y, width - 10, height);
      }
    }
  }
  draw() {
    this.drawSoil();
    this.drawTree();
  }
}