"use strict";
export default function (h, v, width, height) {
  let i = map.trees.length;
  map.trees.push({});
  map.trees[i].x = h * width;
  map.trees[i].y = v * height;
}