"use strict";
import touchVerify from "../../engine/touch/verify.js";
import wheel from "./wheel.js";
export default function () {
  window.player.move = {};
  window.player.move.touchStarted = () => window.player.move.touchMoved();
  window.player.move.touchMoved = () => {
    if (touchVerify(3, 73, 8, 82)) {
      window.player.move.x = -1;
      window.player.move.y = 0;
    } else if (touchVerify(5, 64, 10, 73)) {
      window.player.move.x = -1;
      window.player.move.y = -1;
    } else if (touchVerify(10, 61, 15, 70)) {
      window.player.move.x = 0;
      window.player.move.y = -1;
    } else if (touchVerify(14, 63, 19, 72)) {
      window.player.move.x = 1;
      window.player.move.y = -1;
    } else if (touchVerify(17, 73, 22, 82)) {
      window.player.move.x = 1;
      window.player.move.y = 0;
    } else if (touchVerify(14, 83, 19, 92)) {
      window.player.move.x = 1;
      window.player.move.y = 1;
    } else if (touchVerify(10, 85, 15, 94)) {
      window.player.move.x = 0;
      window.player.move.y = 1;
    } else if (touchVerify(5, 81, 10, 90)) {
      window.player.move.x = -1;
      window.player.move.y = 1;
    }
    player.move.wheel.touchMoved();
  }
  window.player.move.touchEnded = () => {
    if (touchVerify(10, 73, 15, 82)) {
      window.player.move.x = 0;
      window.player.move.y = 0;
    }
    window.player.move.wheel.touchEnded();
  }
  window.player.move.keyTyped = () => {
    switch (window.engine.key) {
      case "w": window.player.move.y = -1; break;
      case "s": window.player.move.y = 1; break;
      case "a": window.player.move.x = -1; break;
      case "d": window.player.move.x = 1; break;
    }
    window.player.move.wheel.keyTyped();
  }
  window.player.move.keyReleased = () => {
    switch (window.engine.key) {
      case "w":
      case "s": window.player.move.y = 0; break;
      case "a":
      case "d": window.player.move.x = 0; break;
    }
    window.player.move.wheel.keyReleased();
  }
  window.player.move.draw = () => {
    let speedX = window.player.move.x * window.player.move.speed;
    let speedY = window.player.move.y * window.player.move.speed;
    let x = window.player.x + speedX;
    let y = window.player.y + speedY;
    let { tree } = window.map.collision(x, y);
    if (!tree) {
      window.player.transform(x, y, window.player.width, window.player.height);
    }
    window.player.move.wheel.draw();
  }
  window.player.move.x = 0;
  window.player.move.y = 0;
  window.player.move.speed = 1;
  wheel();
}