"use strict";
import Element from "./Element.js";
export default class {
  constructor() {
    this.grass = new Element("./Graficos/ground/258.png", 50, 50, () => {
      this.portal = new Element("./Graficos/house/6.png", 200, 200, () => {
        this.earth = new Element("./Graficos/ground/50.png", 50, 50, () => {
          this.tree = new Element("./Graficos/nature/1.png", 100, 100, () => {
            this.tree.court(0, 0, 300, 300);
            data.canDraw = true;
          });
        });
      });
    });
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