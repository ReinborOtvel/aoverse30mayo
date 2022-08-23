"use strict";
import Button from "../utils/button.js";
export default function (gameData) {
  if (gameData.metamask.chainId == 56) {
    let statistics = gameData.pageData.player.statistics;
    gameData.graphicsEngine.image(gameData.pageData.interfaceEmpty, 0, 0, 640, 360);
    gameData.graphicsEngine.text("character", 30, 60);
    Button(gameData, 40, 270, 210, 50, "new character");
    Button(gameData, 290, 270, 240, 50, "create character");
    gameData.graphicsEngine.text(`name ${statistics.name}`, 30, 90);
    gameData.graphicsEngine.text(`strength ${statistics.strength}`, 30, 120);
    gameData.graphicsEngine.text(`endurance ${statistics.endurance}`, 30, 150);
    gameData.graphicsEngine.text(`health ${statistics.health}`, 30, 180);
    gameData.graphicsEngine.text(`speed ${statistics.speed}`, 30, 210);
    gameData.pageData.player.draw();
  }
}