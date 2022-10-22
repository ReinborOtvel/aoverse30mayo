"use strict";
import _lands from "./lands/lands.js";
import _trees from "./trees/trees.js";
export default function () {
  window.map = {};
  map.collision = (_x, _y) => {
    let land = map.lands.collision(_x, _y);
    let tree = map.trees.collision(_x, _y);
    return { land, tree };
  };
  map.position = (_x, _y) => {
    let land = map.lands.position(_x, _y);
    let tree = map.trees.position(_x, _y);
    return { land, tree };
  };
  map.draw = () => {
    map.lands.draw();
    map.trees.draw();
  };
  map.loadImage = _callback => {
    map.lands.loadImage(() => {
      map.trees.loadImage(() => {
        _callback();
      });
    });
  };
  _lands();
  _trees();
}