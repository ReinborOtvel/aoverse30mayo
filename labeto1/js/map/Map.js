"use strict";
import Tree from "./Tree.js";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.tree = new Tree(1, 10, 20, 1, 1);
  }
  collision(x, y) {
    if (this.tree.collision(x, y) == true) {
      return true;
    }
    return false;
  }
  draw() {
    this.tree.draw();
  }
}