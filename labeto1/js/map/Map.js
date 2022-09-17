"use strict";
import Soil from "./Soil.js";
import Tree from "./Tree.js";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.soil = new Soil(() => {
      this.tree = new Tree(this.fullLoad);
    });
  }
  collision(x, y) {
    if (this.tree.collision(x, y) == true) {
      return true;
    }
    return false;
  }
  draw() {
    this.soil.draw();
    this.tree.draw();
  }
}