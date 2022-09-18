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
      new Tree(1, 1, 1, 10, 20),
    ];
    this.entities = [];
  }
  collision(x, y) {
    for (let tree of this.trees) {
      if (tree.collision(x, y) == true) {
        return true;
      }
    }
    return false;
  }
  draw(yEntity) {
    this.afterEntity = [];
    for (let i in this.lands) {
      this.lands[i].draw();
    }
    for (let tree of this.trees) {
      if (tree.afterEntity(yEntity)) {
        this.afterEntity.push(tree);
      } else {
        tree.draw();
      }
    }
    for (let entity of this.entities) {
      //entity.
    }
  }
}