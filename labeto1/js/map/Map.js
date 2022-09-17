"use strict";
import Soil from "./Soil.js";
import Tree from "./Tree.js";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.tree = new Tree(this);
    this.soil = new Soil(this);
    this.imgs();
  }
  imgs() {
    let index = 1;
    let length = 767;
    this.imgs = {};
    let nextImg = () => {
      engine.loadImage(`./graphics/nature/${index}.png`, img => {
        this.imgs[index] = img;
        if (index >= length) {
          this.fullLoad();
        } else {
          index++;
          nextImg();
        }
      });
    }
    nextImg();
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