"use strict";
import Land from "./Land.js";
import Tree from "./Tree.js";
export default class {
  constructor() {
    this.lands = [];
    for (let v = 0; v < 10; v++) {
      for (let h = 0; h < 10; h++) {
        this.lands.push(new Land(579, h, v, 10, 10));
      }
    }
    this.trees = [
      new Tree(1, 1, 10, 20),
      new Tree(2, 1, 10, 20),
      new Tree(3, 1, 10, 20),
      new Tree(4, 1, 10, 20),
      new Tree(1, 2, 10, 20),
      new Tree(2, 2, 10, 20),
      new Tree(3, 2, 10, 20),
      new Tree(4, 2, 10, 20),
    ];
  }
  collision(x, y) {
    for (let tree of this.trees) {
      if (tree.collision(x, y) == true) {
        return true;
      }
    }
    return false;
  }
  touchEntity() {
    for (let tree of this.trees) {
      if (tree.collision(touch.x, touch.y)) {
        return tree;
      }
    }
    return false;
  }
  draw() {
    for (let land of this.lands) {
      land.draw();
    }
    for (let tree of this.trees) {
      tree.draw();
    }
  }
}