"use strict";
export default class {
  constructor() {
    this.lands = [];
    for (let v = 0; v < 10; v++) {
      for (let h = 0; h < 10; h++) {
        this.lands.push(new window.data.obj.map.land(579, h, v, 10, 10));
      }
    }
    this.trees = [
      new window.data.obj.map.tree(1, 1, 10, 20),
      new window.data.obj.map.tree(2, 1, 10, 20),
      new window.data.obj.map.tree(3, 1, 10, 20),
      new window.data.obj.map.tree(4, 1, 10, 20),
      new window.data.obj.map.tree(1, 2, 10, 20),
      new window.data.obj.map.tree(2, 2, 10, 20),
      new window.data.obj.map.tree(3, 2, 10, 20),
      new window.data.obj.map.tree(4, 2, 10, 20),
    ];
  }
  collision(x, y) {
    for (let tree of this.trees) {
      if (tree.collision(x, y) == true) return true;
    }
    return false;
  }
  positionEntity(x, y) {
    for (let tree of this.trees) {
      if (tree.collision(x, y)) return tree;
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