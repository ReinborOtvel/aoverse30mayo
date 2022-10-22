"use strict";
import _parts from "./parts/parts.js";
import _move from "./move/move.js";
export default function (_x, _y) {
  window.player = {};
  player.loadImage = _callback => {
    player.parts.loadImage(_callback);
  };
  player.transform = (_x, _y, _width, _height) => {
    player.x = _x;
    player.y = _y;
    player.width = _width;
    player.height = _height;
    player.parts.transform();
  };
  player.draw = () => {
    player.move.draw();
    player.parts.draw();
  };
  player.keyTyped = () => {
    player.move.keyTyped();
    player.parts.keyTyped();
  };
  player.keyReleased = () => {
    player.move.keyReleased();
    player.parts.keyReleased();
  };
  player.touchStarted = () => {
    player.move.touchStarted();
    player.parts.touchStarted();
  };
  player.touchMoved = () => {
    player.move.touchMoved();
    player.parts.touchMoved();
  };
  player.touchEnded = () => {
    player.move.touchEnded();
    player.parts.touchEnded();
    player.interaction.touchEnded();
  };
  _parts();
  _move();
  player.inventory = ["axe"];
  player.transform(_x, _y, 5, 5);
};