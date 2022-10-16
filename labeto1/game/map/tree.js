"use strict";
export default function (h, v, width, height) {
  let i = window.map.trees.length;
  window.map.trees.push({});
  window.map.trees[i].x = h * width;
  window.map.trees[i].y = v * height;
}