"use strict";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.width = 4096;
    this.height = 2880;
    this.setImg();
  }
  setImg() {
    let url = `./Graficos/map.jpg`;
    engine.loadImage(url, img => {
      this.img = img;
      this.fullLoad();
    });
  }
  collision(x, y) {
    let verifyCollision = (xInit, yInit, xEnd, yEnd) => {
      return x > xInit && y > yInit && x < xEnd && y < yEnd;
    }
    let collisions = [
      [60, 0, 330, 174],
      [390, 18, 516, 150],
      [552, 12, 678, 138],
      [738, 54, 798, 114],
      [738, 150, 798, 210],
      [744, 402, 798, 450],
      [738, 492, 798, 546],
      [654, 492, 708, 552],
      [450, 480, 636, 552],
      [228, 480, 408, 552],
      [18, 480, 204, 546],

      [6, 810, 84, 930],
      [90, 744, 270, 990],
      [269, 810, 330, 936],
      [360, 810, 438, 924],
      [438, 744, 606, 990],
      [624, 810, 702, 924],
      [714, 810, 792, 930],
    ];
    console.log(x, y);
    if (x < 0 || y < 0 || x > this.width || y > this.height) {
      return true;
    }
    for (let collision of collisions) {
      if (verifyCollision(...collision) == true) {
        return true;
      }
    }
    return false;
  }
  draw(player) {
    let x = player.x * -1;
    let y = player.y * -1;
    x += 320;
    y += 180;
    engine.image(this.img, x, y, this.width, this.height);
  }
}