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
    x += engine.width / 2;
    y += engine.height / 2;
    engine.image(this.img, x, y, this.width, this.height);
  }
}