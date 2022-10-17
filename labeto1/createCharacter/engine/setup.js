"use strict";
import metamask from "../metamask/metamask.js";
import player from "../player/player.js";
export default function () {
  window.canDraw = false;
  window.engine.createCanvas(852, 480);
  window.engine.frameRate(15);
  player();
  metamask();
}