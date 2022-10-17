"use strict";
import parts from "./parts/parts.js";
import move from "./move.js";
import movementWheel from "./movementWheel.js";
export default function (x, y) {
  window.player = {};
  window.player.loadImage = callback => {
    window.player.parts.loadImage(callback);
  }
  window.player.transform = (x, y, width, height) => {
    window.player.x = x;
    window.player.y = y;
    window.player.width = width;
    window.player.height = height;
    window.player.parts.transform();
  }
  window.player.draw = () => {
    window.player.parts.draw();
    window.player.move.draw();
    window.player.movementWheel.draw();
  }
  window.player.keyTyped = () => {
    window.player.move.keyTyped();
    window.player.movementWheel.keyTyped();
  }
  window.player.keyReleased = () => {
    window.player.move.keyReleased();
    window.player.movementWheel.keyReleased();
  }
  window.player.touchStarted = () => {
    window.player.move.touchStarted();
    window.player.movementWheel.touchStarted();
  }
  window.player.touchMoved = () => {
    window.player.move.touchMoved();
    window.player.movementWheel.touchMoved();
  }
  window.player.touchEnded = () => {
    window.player.move.touchEnded();
    window.player.movementWheel.touchEnded();
  }
  parts();
  move();
  movementWheel();
  window.player.transform(x, y, 5, 5);
}