"use strict";
import land from "./land.js";
export default function () {
  window.map.lands = {};
  window.map.lands.collision = (x, y) => {
    for (let land of window.map.lands.lands) {
      if (land.collision(x, y)) return true;
    }
    return false;
  }
  window.map.lands.position = (x, y) => {
    for (let land of window.map.lands.lands) {
      if (land.collision(x, y)) return land;
    }
    return false;
  }
  window.map.lands.draw = () => {
    for (let land of window.map.lands.lands) land.draw();
  }
  window.map.lands.lands = [];
  for (let v = 0; v < 10; v++) {
    for (let h = 0; h < 10; h++) {
      land(579, h, v, 10, 10);
    }
  }
}