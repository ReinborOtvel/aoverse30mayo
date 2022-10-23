"use strict";
import circle from "../../utils/circle.js";
export default function () {
  window.player.move.wheel = {};
  window.player.move.wheel.keyTyped = () => window.player.move.wheel.updatePosition();
  window.player.move.wheel.keyReleased = () => window.player.move.wheel.updatePosition();
  window.player.move.wheel.touchStarted = () => window.player.move.wheel.updatePosition();
  window.player.move.wheel.touchMoved = () => window.player.move.wheel.updatePosition();
  window.player.move.wheel.touchEnded = () => window.player.move.wheel.updatePosition();
  window.player.move.wheel.updatePosition = () => {
    switch (window.player.move.x) {
      case 0:
        window.player.move.wheel.x = 13;
        switch (window.player.move.y) {
          case 0: window.player.move.wheel.y = 78; break;
          case -1: window.player.move.wheel.y = 66; break;
          case 1: window.player.move.wheel.y = 90; break;
        }
        break;
      case -1:
        switch (window.player.move.y) {
          case 0:
            window.player.move.wheel.x = 6;
            window.player.move.wheel.y = 78;
            break;
          case -1:
            window.player.move.wheel.x = 8;
            window.player.move.wheel.y = 69;
            break;
          case 1:
            window.player.move.wheel.x = 8;
            window.player.move.wheel.y = 86;
            break;
        }
        break;
      case 1:
        switch (window.player.move.y) {
          case 0:
            window.player.move.wheel.x = 20;
            window.player.move.wheel.y = 78;
            break;
          case -1:
            window.player.move.wheel.x = 17;
            window.player.move.wheel.y = 68;
            break;
          case 1:
            window.player.move.wheel.x = 17;
            window.player.move.wheel.y = 88;
            break;
        }
        break;
    }
  }
  window.player.move.wheel.draw = () => {
    window.engine.stroke("#fff");
    window.engine.noFill();
    circle(window.player.move.wheel.x, window.player.move.wheel.y, 5);
    circle(13, 78, 20);
  }
  window.player.move.wheel.x = 13;
  window.player.move.wheel.y = 78;
}