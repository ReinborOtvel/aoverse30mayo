"use strict";
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
    window.player.movementWheel.mouseReleased();
  }
  window.player.keyReleased = () => {
    window.player.move.keyReleased();
    window.player.movementWheel.mouseReleased();
  }
  window.player.mouseReleased = () => {
    window.player.movementWheel.mouseReleased();
  }
  PlayerParts();
  PlayerMove();
  PlayerMovementWheel();
  window.player.transform(x, y, 5, 5);
}