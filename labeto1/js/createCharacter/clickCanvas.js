"use strict";
import VerifyClick from "./verifyClick.js";
import Player from "../player/player.js";
import CreateCharacter from "./createCharacter.js";
export default function ClickCanvas(x, y) {
  console.log(this.x, this.y);
  if (VerifyClick(x, y, 52, 284, 233, 300)) {
    gameData.player = new Player();
  } else if (VerifyClick(x, y, 301, 283, 512, 300)) {
    if (gameData.createdCharacter == true) {
      CreateCharacter();
    }
  }
}