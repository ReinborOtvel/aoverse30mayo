"use strict";
import ClickCanvas from "./clickCanvas.js";
export default {
  preload() {
    gameData.p5.loadImage("./assets/interfaceEmpty.png", img => {
      gameData.interfaceEmpty = img;
      let canvas = document.querySelector("canvas");
      canvas.addEventListener("click", ({ pageX, pageY }) => {
        ClickCanvas(pageX, pageY);
      });
    });
  },
  draw() {
    let statistics = gameData.player.statistics;
    image(gameData.interfaceEmpty, 0, 0, 640, 360);
    text("character", 30, 60);
    text("new character", 50, 300);
    text("create character", 300, 300);
    text(`name ${statistics.name}`, 30, 90);
    text(`strength ${statistics.strength}`, 30, 120);
    text(`endurance ${statistics.endurance}`, 30, 150);
    text(`health ${statistics.health}`, 30, 180);
    text(`speed ${statistics.speed}`, 30, 210);
    gameData.player.draw();
  }
}