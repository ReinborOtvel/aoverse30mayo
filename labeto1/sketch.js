"use strict";
import ChargingScreen from "./js/chargingScreen/p5.js";
import CreateCharacter from "./js/createCharacter/p5.js";
import EnterGroup from "./js/enterGroup/p5.js";
import Game from "./js/game/p5.js";
window.gameData = {};
gameData.newPage = page => {
  gameData.canDraw = false;
  gameData.page = page;
  gameData.p5.createCanvas(640, 360);
  gameData.p5.frameRate(30);
  switch (gameData.page) {
    case "chargingScreen": ChargingScreen.setup(); break;
    case "createCharacter": CreateCharacter.setup(); break;
    case "enterGroup": EnterGroup.setup(); break;
    case "game": Game.setup(); break;
  }
}
new p5(game => {
  gameData.p5 = game;
  gameData.p5.setup = () => gameData.newPage("chargingScreen");
  gameData.p5.draw = () => {
    if (gameData.canDraw == true) {
      gameData.p5.noSmooth();
      gameData.p5.textAlign(gameData.p5.LEFT);
      gameData.p5.textWrap(gameData.p5.WORD);
      gameData.p5.fill("#fff");
      gameData.p5.textSize(30);
      switch (gameData.page) {
        case "chargingScreen": ChargingScreen.draw(); break;
        case "createCharacter": CreateCharacter.draw(); break;
        case "enterGroup": EnterGroup.draw(); break;
        case "game": Game.draw(); break;
      }
    }
  }
});