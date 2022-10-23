"use strict";
import Image from "../../utils/image.js";
export default function (h, v, width, height) {
  let i = window.map.trees.trees.length;
  window.map.trees.trees.push({});
  window.map.trees.trees[i].collision = (x, y) => {
    let xEnd = window.map.trees.trees[i].x + window.map.trees.trees[i].width;
    let yEnd = window.map.trees.trees[i].y + window.map.trees.trees[i].height;
    return x >= window.map.trees.trees[i].x && y >= window.map.trees.trees[i].y && x <= xEnd && y <= yEnd;
  };
  window.map.trees.trees[i].loadImage = callback => {
    window.engine.loadImage("../graphics/nature/tree/5.png", image => {
      window.map.trees.trees[i].image = image;
      callback();
    })
  };
  window.map.trees.trees[i].draw = () => {
    let { image, x, y, width, height } = window.map.trees.trees[i];
    Image(image, x, y, width, height);
  }
  window.map.trees.trees[i].width = width;
  window.map.trees.trees[i].height = height;
  window.map.trees.trees[i].x = h * window.map.trees.trees[i].width;
  window.map.trees.trees[i].y = v * window.map.trees.trees[i].height;
}