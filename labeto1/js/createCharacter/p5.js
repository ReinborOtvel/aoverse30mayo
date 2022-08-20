"use strict";
import Player from "../player/player.js";
import StatisticsRandom from "../player/statisticsRandom.js";
import ClickCanvas from "./clickCanvas.js";
export default {
  setup() {
    gameData.p5.loadImage("./assets/interfaceEmpty.png", interfaceEmpty => {
      gameData.interfaceEmpty = interfaceEmpty;
      gameData.player = new Player({
        x: 300, y: 70, width: 150, height: 150,
      }, StatisticsRandom(), () => {
        let canvas = document.querySelector("canvas");
        canvas.addEventListener("click", ({ pageX, pageY }) => {
          ClickCanvas(pageX, pageY);
        });
        gameData.canDraw = true;
        gameData.createdCharacter = true;
      });
    });
  },
  draw() {
    let statistics = gameData.player.statistics;
    gameData.p5.image(gameData.interfaceEmpty, 0, 0, 640, 360);
    gameData.p5.text("character", 30, 60);
    gameData.p5.text("new character", 50, 300);
    gameData.p5.text("create character", 300, 300);
    gameData.p5.text(`name ${statistics.name}`, 30, 90);
    gameData.p5.text(`strength ${statistics.strength}`, 30, 120);
    gameData.p5.text(`endurance ${statistics.endurance}`, 30, 150);
    gameData.p5.text(`health ${statistics.health}`, 30, 180);
    gameData.p5.text(`speed ${statistics.speed}`, 30, 210);
    gameData.player.draw();
  }
}