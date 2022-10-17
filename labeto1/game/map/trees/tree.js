"use strict";
export default function (h, v, width, height) {
  let i = window.map.trees.length;
  window.map.trees.push({});
  window.map.trees[i].collision = (x, y) => {
    return false;
  };
  window.map.trees[i].loadImage = callback => {
    window.loadImage("./graphics/nature/tree/5.png", image => {
      window.map.trees[i].image = image;
      callback();
    })
  };
  window.map.trees[i].draw = () => {
    let { image, x, y, width, height } = window.map.trees[i];
    image(image, x, y, width, height);
  }
  window.map.trees[i].width = width;
  window.map.trees[i].height = height;
  window.map.trees[i].x = h * window.map.trees[i].width;
  window.map.trees[i].y = v * window.map.trees[i].height;
}