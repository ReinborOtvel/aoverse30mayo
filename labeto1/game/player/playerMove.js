"use strict";
export default function () {
  player.move = {};
  player.move.keyTyped = () => {
    switch (window.key) {
      case "w": player.move.y = -1; break;
      case "s": player.move.y = 1; break;
      case "a": player.move.x = -1; break;
      case "d": player.move.x = 1; break;
    }
  }
  player.move.keyReleased = () => {
    switch (window.key) {
      case "w":
      case "s": player.move.y = 0; break;
      case "a":
      case "d": player.move.x = 0; break;
    }
  }
  player.move.draw = () => {
    let speedX = player.move.x * player.move.speed;
    let speedY = player.move.y * player.move.speed;
    let x = player.x + speedX;
    let y = player.y + speedY;
    if (!map.collision(x, y)) {
      player.transform(x, y, player.width, player.height);
    }
  }
  player.move.x = 0;
  player.move.y = 0;
  player.move.speed = 3;
}