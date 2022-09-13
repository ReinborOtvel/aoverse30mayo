"use strict";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.width = 4096;
    this.height = 2856;
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
      [-1, -1, 684, 168],
      [732, 48, 804, 216],
      [732, 396, 804, 546],
      [-1, 480, 708, 552],
      [-1, 744, 786, 1002],
      [-1, 1188, 810, 1446],
      [-1, 1650, 834, 1806],
      [-1, 1734, 180, 2364],
      [-1, 2298, 816, 2652],
      [1872, 990, 3336, 1416],
      [3630, -1, this.width, this.height + 1],
    ];
    console.log(x, y);
    if (x < 12 || y < 12 || x > this.width || y > this.height) {
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
    x += player.transform.x;
    y += player.transform.y;
    engine.image(this.img, x, y, this.width, this.height);
  }
}