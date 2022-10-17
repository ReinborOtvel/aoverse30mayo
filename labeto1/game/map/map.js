"use strict";
import land from "./land.js";
import tree from "./tree.js";
export default function () {
  window.map = {};
  window.map.collision = (x, y) => {
    for (let tree of window.map.trees) {
      if (tree.collision(x, y)) return true;
    }
    return false;
  }
  window.map.entityPosition = (x, y) => {
    for (let tree of window.map.trees) {
      if (tree.collision(x, y)) return tree;
    }
    return false;
  }
  window.map.draw = () => {
    for (let land of window.map.lands) land.draw();
    for (let tree of window.map.trees) tree.draw();
  }
  window.map.loadImageLands = callback => {
    let i = 0;
    let nextLand = () => {
      if (i < window.map.lands.length - 1) {
        window.map.lands[i].loadImage(() => {
          nextLand();
        });
      } else {
        window.map.lands[i].loadImage(() => {
          callback();
        });
      }
      i++;
    }
    nextLand();
  }
  window.map.loadImage = callback => {
    window.map.loadImageLands(() => {
      window.map.loadImageTrees(() => {
        callback();
      })
    });
  }
  window.map.lands = [];
  for (let v = 0; v < 10; v++) {
    for (let h = 0; h < 10; h++) {
      land(579, h, v, 10, 10);
    }
  }
  window.map.trees = [];
  tree(1, 1, 10, 20);
  tree(2, 1, 10, 20);
  tree(3, 1, 10, 20);
  tree(4, 1, 10, 20);
  tree(1, 2, 10, 20);
  tree(2, 2, 10, 20);
  tree(3, 2, 10, 20);
  tree(4, 2, 10, 20);
}