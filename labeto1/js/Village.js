"use strict";
import Element from "./Element.js";
export default class {
  constructor(callback) {
    this.grass = new Element("./Graficos/ground/258.png", 50, 50, () => {
      this.portal = new Element("./Graficos/house/6.png", 200, 200, () => {
        this.earth = new Element("./Graficos/ground/50.png", 50, 50, () => {
          this.tree = new Element("./Graficos/nature/1.png", 100, 100, () => {
            this.tree.court(0, 0, 300, 300);
            callback();
          });
        });
      });
    });
  }
  collision(x, y) {
    let verifyCollision = (xInit, yInit, xEnd, yEnd) => {
      return x > xInit && y > yInit && x < xEnd && y < yEnd;
    }
    console.log(x, y);
    if (verifyCollision(-50, 0, 165, 165)) {
      return true;
    } else if (verifyCollision(137, 0, 392, 71)) {
      return true;
    } else if (verifyCollision(386, 0, 640, 167)) {
      return true;
    } else if (verifyCollision(154, 60, 200, 116)) {
      return true;
    } else if (verifyCollision(239, 60, 347, 191)) {
      return true;
    }
    return false;
  }
  draw() {
    for (let x = 0; x < 13; x++) {
      for (let y = 0; y < 8; y++) {
        this.grass.draw(50 * x, 50 * y);
      }
    }
    for (let x = 0; x < 13; x++) {
      this.earth.draw(50 * x, 50 * 5);
      this.earth.draw(50 * x, 50 * 5.5);
    }
    for (let x = 0; x < 13; x++) {
      this.tree.drawCut(0, 100 * x, 0);
      if (x >= 2 && x < 4) {
        continue;
      }
      this.tree.drawCut(0, (100 * x) + 50, 50);
      this.tree.drawCut(0, 100 * x, 100);
    }
    this.portal.draw(250, 80);
  }
}