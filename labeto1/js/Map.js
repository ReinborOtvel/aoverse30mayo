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
        [-50, -50, 218, 200],
        [180, -50, 280, 105],
        [236, -50, 670, 200],
        [134, 190, 200, 242],
        [242, 164, 308, 242],
        [-50, 260, 660, 380],
      ],
      [
        [-50, -50, 160, 200],
        [200, -50, 660, 200],
        [150, -50, 210, 130],
        [-50, 260, 660, 380],
      ],
      [

      ]
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