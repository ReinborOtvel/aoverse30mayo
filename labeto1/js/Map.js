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
      [54, 42, 126, 336],
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
      [90, 744, 264, 888],
      [156, 798, 222, 996],
      [269, 810, 330, 936],
      [360, 810, 438, 924],
      [438, 744, 606, 894],
      [498, 880, 558, 1002],
      [624, 810, 702, 924],
      [714, 810, 792, 930],
      [732, 1296, 816, 1410],
      [606, 1296, 678, 1410],
      [414, 1194, 594, 1446],
      [366, 1296, 444, 1410],
      [264, 1296, 336, 1410],
      [78, 1188, 264, 1440],
      [12, 1296, 96, 1416],
      [-1, 1650, 84, 1722],
      [90, 1656, 168, 1728],
      [174, 1656, 252, 1722],
      [276, 1698, 360, 1770],
      [372, 1692, 456, 1776],
      [462, 1692, 546, 1770],
      [744, 1734, 828, 1800],
      [-1, 1740, 174, 2370],
      [1878, 996, 2160, 1422],
      [24, 2376, 258, 2652],
      [6, 2568, 96, 2646],
      [540, 1650, 642, 1722],
      [630, 1650, 714, 1728],
      [714, 1650, 792, 1722],
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