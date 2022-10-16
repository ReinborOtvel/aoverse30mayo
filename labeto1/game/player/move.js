"use strict";
export default function () {
  window.player.move = {};
  window.player.move.keyTyped = () => {
    switch (window.engine.key) {
      case "w": window.player.move.y = -1; break;
      case "s": window.player.move.y = 1; break;
      case "a": window.player.move.x = -1; break;
      case "d": window.player.move.x = 1; break;
    }
  }
  window.player.move.keyReleased = () => {
    switch (window.engine.key) {
      case "w":
      case "s": window.player.move.y = 0; break;
      case "a":
      case "d": window.player.move.x = 0; break;
    }
  }
  window.player.move.draw = () => {
    let speedX = window.player.move.x * window.player.move.speed;
    let speedY = window.player.move.y * window.player.move.speed;
    let x = window.player.x + speedX;
    let y = window.player.y + speedY;
    if (!map.collision(x, y)) {
      window.player.transform(x, y, window.player.width, window.player.height);
    }
  }
  window.player.move.x = 0;
  window.player.move.y = 0;
  window.player.move.speed = 3;
}