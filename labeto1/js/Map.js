"use strict";
import Element from "./Element.js";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.assignGrass();
  }
  assignGrass() {
    let url = "./Graficos/ground/258.png";
    engine.loadImage(url, img => {
      this.grass = img;
      this.assignPortal();
    });
  }
  assignPortal() {
    let url = "./Graficos/house/6.png";
    engine.loadImage(url, img => {
      this.portal = img;
      this.assignEarth();
    });
  }
  assignEarth() {
    let url = "./Graficos/ground/50.png";
    engine.loadImage(url, img => {
      this.earth = img;
      this.assignTree();
    });
  }
  assignTree() {
    let url = "./Graficos/nature/1.png";
    engine.loadImage(url, img => {
      this.tree = img.get(0, 0, 300, 300);
      this.assignBush();
    });
  }
  assignBush() {
    let url = "./Graficos/nature/7.png";
    engine.loadImage(url, img => {
      this.bush = img;
      this.fullLoad();
    });
  }
  collision(x, y) {
    let verifyCollision = (xInit, yInit, xEnd, yEnd) => {
      return x > xInit && y > yInit && x < xEnd && y < yEnd;
    }
    let collisions = [
      [-50, 0, 165, 165],
      [137, 0, 392, 71],
      [386, 0, 640, 167],
      [154, 60, 200, 116],
      [239, 60, 347, 191],
    ];
    console.log(x, y);
    for (let collision of collisions) {
      if (verifyCollision(...collision) == true) {
        return true;
      }
    }
    return false;
  }
  element(type, x, y, width, height) {
    return new Element(this[type], [x, y, width, height]);
  }
}