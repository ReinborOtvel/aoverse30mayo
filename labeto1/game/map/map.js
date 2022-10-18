"use strict";
import lands from "./lands/lands.js";
import trees from "./trees/trees.js";
export default function () {
  window.map = {};
  window.map.collision = (x, y) => {
    let land = window.map.lands.collision(x, y);
    let tree = window.map.trees.collision(x, y);
    return { land, tree };
  };
  window.map.entitiesPosition = (x, y) => {
    let land = window.map.lands.position(x, y);
    let tree = window.map.trees.position(x, y);
    return { land, tree };
  };
  window.map.draw = () => {
    window.map.lands.draw();
    window.map.trees.draw();
  };
  window.map.loadImage = callback => {
    window.map.lands.loadImage(() => {
      window.map.trees.loadImage(() => {
        callback();
      });
    });
  };
  lands();
  trees();
}