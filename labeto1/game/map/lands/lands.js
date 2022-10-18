"use strict";
import land from "./land.js";
export default function () {
  window.map.lands = {};
  let lands = window.map.lands;
  lands.collision = (x, y) => {
    for (let land of lands.lands) {
      if (land.collision(x, y)) return true;
    }
    return false;
  }
  lands.position = (x, y) => {
    for (let land of lands.lands) {
      if (land.collision(x, y)) return land;
    }
    return false;
  }
  lands.draw = () => {
    for (let land of lands.lands) land.draw();
  }
  lands.loadImage = callback => {
    let i = 0;
    let next = () => {
      if (i < lands.lands.length - 1) {
        lands.lands[i].loadImage(() => {
          next();
        });
      } else {
        lands.lands[i].loadImage(() => {
          callback();
        });
      }
      i++;
    }
    next();
  }
  lands.lands = [];
  for (let v = 0; v < 10; v++) {
    for (let h = 0; h < 10; h++) {
      land(579, h, v, 10, 10);
    }
  }
}