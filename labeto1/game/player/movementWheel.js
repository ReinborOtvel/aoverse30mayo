"use strict";
import circle from "../utils/circle.js";
export default function () {
  window.player.movementWheel = {};
  window.player.movementWheel.mouseReleased = () => {
    switch (window.player.move.x) {
      case 0:
        window.player.movementWheel.x = 13;
        switch (window.player.move.y) {
          case 0: window.player.movementWheel.y = 78; break;
          case -1: window.player.movementWheel.y = 66; break;
          case 1: window.player.movementWheel.y = 90; break;
        }
        break;
      case -1:
        switch (window.player.move.y) {
          case 0:
            window.player.movementWheel.x = 6;
            window.player.movementWheel.y = 78;
            break;
          case -1:
            window.player.movementWheel.x = 8;
            window.player.movementWheel.y = 69;
            break;
          case 1:
            window.player.movementWheel.x = 8;
            window.player.movementWheel.y = 86;
            break;
        }
        break;
      case 1:
        switch (window.player.move.y) {
          case 0:
            window.player.movementWheel.x = 20;
            window.player.movementWheel.y = 78;
            break;
          case -1:
            window.player.movementWheel.x = 17;
            window.player.movementWheel.y = 68;
            break;
          case 1:
            window.player.movementWheel.x = 17;
            window.player.movementWheel.y = 88;
            break;
        }
        break;
    }
  }
  window.player.movementWheel.draw = () => {
    window.engine.stroke("#fff");
    window.engine.noFill();
    circle(window.player.movementWheel.x, window.player.movementWheel.y, 5);
    circle(13, 78, 20);
  }
  window.player.movementWheel.x = 13;
  window.player.movementWheel.y = 78;
}