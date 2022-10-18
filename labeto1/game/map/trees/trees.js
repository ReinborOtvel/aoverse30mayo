"use strict";
import tree from "./tree.js";
export default function () {
  window.map.trees = {};
  window.map.trees.collision = (x, y) => {
    for (let tree of window.map.trees.trees) {
      if (tree.collision(x, y)) return true;
    }
    return false;
  }
  window.map.trees.position = (x, y) => {
    for (let tree of window.map.trees.trees) {
      if (tree.collision(x, y)) return tree;
    }
    return false;
  }
  window.map.trees.draw = () => {
    for (let tree of window.map.trees.trees) tree.draw();
  }
  window.map.trees.loadImage = callback => {
    let i = 0;
    let next = () => {
      if (i < window.map.trees.trees.length - 1) {
        window.map.trees.trees[i].loadImage(() => {
          next();
        });
      } else {
        window.map.trees.trees[i].loadImage(() => {
          callback();
        });
      }
      i++;
    }
    next();
  }
  window.map.trees.trees = [];
  tree(1, 1, 10, 20);
  tree(2, 1, 10, 20);
  tree(3, 1, 10, 20);
  tree(4, 1, 10, 20);
  tree(1, 2, 10, 20);
  tree(2, 2, 10, 20);
  tree(3, 2, 10, 20);
  tree(4, 2, 10, 20);
}