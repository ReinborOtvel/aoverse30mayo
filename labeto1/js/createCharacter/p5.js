"use strict";
import Player from "../player/player.js";
import StatisticsRandom from "../player/statisticsRandom.js";
import Button from "../utils/button.js";
import Binance from "../metamask/binance.js";
import CreateCharacter from "./createCharacter.js";
export default {
  setup() {
    if (gameData.chainId == 56) {
      gameData.interfaceEmpty = gameData.p5.loadImage("./assets/interfaceEmpty.png");
      gameData.player = new Player({
        x: 300, y: 70, width: 150, height: 150,
      }, StatisticsRandom());
    } else {
      Binance();
    }
  },
  click() {
    if (VerifyClick(50, 280, 260, 330)) {
      gameData.player = new Player({
        x: 300, y: 70, width: 150, height: 150,
      }, StatisticsRandom());
    } else if (VerifyClick(300, 280, 540, 330)) {
      CreateCharacter();
    }
  },
  draw() {
    let statistics = gameData.player.statistics;
    gameData.p5.image(gameData.interfaceEmpty, 0, 0, 640, 360);
    gameData.p5.text("character", 30, 60);
    Button(40, 270, 210, 50, "new character");
    Button(290, 270, 240, 50, "create character");
    gameData.p5.text(`name ${statistics.name}`, 30, 90);
    gameData.p5.text(`strength ${statistics.strength}`, 30, 120);
    gameData.p5.text(`endurance ${statistics.endurance}`, 30, 150);
    gameData.p5.text(`health ${statistics.health}`, 30, 180);
    gameData.p5.text(`speed ${statistics.speed}`, 30, 210);
    gameData.player.draw();
  }
}