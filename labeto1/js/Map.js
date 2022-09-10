"use strict";
import Element from "./Element.js";
import ElementCourt from "./ElementCourt.js";
export default class {
  constructor(callback) {
    this.earth = new Element("./Graficos/ground/50.png", 50, 50, () => {
      this.tree = new ElementCourt("./Graficos/nature/1.png", 100, 100, [0, 0, 300, 300], () => {
        this.bush = new Element("./Graficos/nature/7.png", 80, 80, () => {
          callback();
        });
      });
    });
  }
  assignGrass() {
    let url = "./Graficos/ground/258.png";
    let transform = [0, 0, 50, 50];
    this.grass = new Element(url, transform, () => {
      this.assignPortal();
    });
  }
  assignPortal() {
    let url = "./Graficos/house/6.png";
    let transform = [0, 0, 200, 200];
    this.portal = new Element(url, transform, () => {
      this.assignEarth();
    })
  }
  assignEarth() {
    let url = "./Graficos/ground/50.png";
    let transform = [0, 0, 50, 50];
    this.earth = new Element
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
    for (let i = -1; i < 22; i++) {
      let x = 30 * i;
      this.bush.draw(x, 320);
    }
    for (let i = -1; i < 3; i++) {
      let x = 30 * i;
      this.bush.draw(x, 180);
    }
  }
}