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
      [854, 6, 914, 2868],
      [16, 544, 856, 766],
      [16, 1432, 856, 1654],
      [16, 2638, 856, 2836],
      [1874, 984, 2162, 1398],
      [2318, 1014, 2618, 1314],
      [2594, 1152, 2696, 1296],
      [3008, 1002, 3332, 1332],
    ];
    if (x < 22 || y < 24 || x > 4076 || y > 2832) {
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