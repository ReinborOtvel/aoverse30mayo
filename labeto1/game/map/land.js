"use strict";
export default function (index, h, v, width, height) {
  let i = map.lands.length;
  map.lands.push({});
  map.lands[i].x = h * width;
  map.lands[i].y = v * height;
}