"use strict";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.index = 0;
    this.setImgs();
  }
  setImgs() {
    this.imgs = [];
    let i = 0;
    let length = 2;
    let nextImg = () => {
      let url = `./Graficos/maps/${i}.png`;
      engine.loadImage(url, img => {
        this.imgs[i] = img;
        i++;
        if (i <= length) {
          nextImg();
        } else {
          this.fullLoad();
        }
      });
    }
    nextImg();
  }
  collision(x, y) {
    let verifyCollision = (xInit, yInit, xEnd, yEnd) => {
      return x > xInit && y > yInit && x < xEnd && y < yEnd;
    }
    let collisions = [
      [
        [-50, 0, 700, 200],
        [107, 150, 185, 278],
        [215, 185, 284, 278],
        [-50, 280, 700, 380],
        [-50, -50, 0, 380],
      ],
      [],
      []
    ];
    console.log(x, y);
    for (let collision of collisions[this.index]) {
      if (verifyCollision(...collision) == true) {
        return true;
      }
    }
    return false;
  }
  draw() {
    engine.image(this.imgs[this.index], 0, 0, 640, 360);
  }
}