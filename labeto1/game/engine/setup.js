"use strict";
import map from "../map/map.js";
import player from "../player/player.js";
import metamask from "../metamask/metamask.js";
export default function () {
  window.engine.createCanvas(852, 480);
  window.engine.frameRate(15);
  map();
  player(5, 5);
  metamask();
}