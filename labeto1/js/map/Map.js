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
    this.trees = [];
    for (let h = 0; h <= 9; h += parseInt(engine.random(1, 4))) {
      for (let v = 0; v <= 4; v += 2) {
        let index = parseInt(engine.random(1, 59));
        this.trees.push(new Tree(index, h, v, 10, 20));
      }
    }
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
  draw() {
    this.afterEntities = [];
    for (let land of this.lands) {
      land.draw();
    }
    treeFor: for (let tree of this.trees) {
      for (let entity of this.entities) {
        if (entity.afterY(tree)) {
          this.afterEntities.push(tree);
          continue treeFor;
        }
      }
      tree.draw();
    }
    for (let entity of this.entities) {
      entity.draw();
    }
    for (let entity of this.afterEntities) {
      entity.draw();
    }
  }
}