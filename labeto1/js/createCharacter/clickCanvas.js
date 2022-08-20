"use strict";
import VerifyClick from "./verifyClick.js";
import Player from "../player/player.js";
import CreateCharacter from "./createCharacter.js";
import StatisticsRandom from "../player/statisticsRandom.js";
export default function ClickCanvas(x, y) {
  console.log(x, y);
  if (gameData.canDraw == true) {
    if (VerifyClick(x, y, 52, 284, 233, 300)) {
      gameData.canDraw = false;
      gameData.player = new Player({
        x: 300, y: 70, width: 150, height: 150,
      }, StatisticsRandom(), () => {
        gameData.canDraw = true;
      });
    } else if (VerifyClick(x, y, 301, 283, 512, 300)) {
      if (gameData.createdCharacter == true) {
        CreateCharacter();
      }
    }
  }
}