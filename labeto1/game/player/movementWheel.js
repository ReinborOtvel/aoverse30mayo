"use strict";
export default function () {
  player.movementWheel = {};
  player.movementWheel.mouseReleased = () => {
    switch (player.move.x) {
      case 0:
        player.movementWheel.x = 13;
        switch (player.move.y) {
          case 0: player.movementWheel.y = 78; break;
          case -1: player.movementWheel.y = 66; break;
          case 1: player.movementWheel.y = 90; break;
        }
        break;
      case -1:
        switch (player.move.y) {
          case 0:
            player.movementWheel.x = 6;
            player.movementWheel.y = 78;
            break;
          case -1:
            player.movementWheel.x = 8;
            player.movementWheel.y = 69;
            break;
          case 1:
            player.movementWheel.x = 8;
            player.movementWheel.y = 86;
            break;
        }
        break;
      case 1:
        switch (player.move.y) {
          case 0:
            player.movementWheel.x = 20;
            player.movementWheel.y = 78;
            break;
          case -1:
            player.movementWheel.x = 17;
            player.movementWheel.y = 68;
            break;
          case 1:
            player.movementWheel.x = 17;
            player.movementWheel.y = 88;
            break;
        }
        break;
    }
  }
  player.movementWheel.draw = () => {
    window.stroke("#fff");
    window.noFill();
    Circle(player.movementWheel.x, player.movementWheel.y, 5);
    Circle(13, 78, 20);
  }
  player.movementWheel.x = 13;
  player.movementWheel.y = 78;
}