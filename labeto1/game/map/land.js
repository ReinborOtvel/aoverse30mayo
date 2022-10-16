"use strict";
export default function (index, h, v, width, height) {
  let i = window.map.lands.length;
  window.map.lands.push({});
  window.map.lands[i].x = h * width;
  window.map.lands[i].y = v * height;
}