"use strict";
import verifyClick from "./verifyClick.js";
import statisticsRandom from "./statisticsRandom.js";
import databaseInformation from "./databaseInformation.js";
import Player from "./Player.js";
import rect from "./rect.js";
import text from "./text.js";
export default class {
  setup() {
    this.interfaceEmpty = engine.loadImage("./Graficos/Interfaces/empty.png");
    this.transaction = false;
    this.newCharacter();
  }
  newCharacter() {
    if (this.player == undefined || data.canDraw == true) {
      data.canDraw = false;
      this.player = new Player({ x: 300, y: 45, width: 250, height: 250, }, statisticsRandom(), () => {
        data.canDraw = true;
      });
    }
  }
  click() {
    if (verifyClick(49, 229, 220, 266)) {
      this.newCharacter();
    } else if (verifyClick(49, 280, 220, 316)) {
      this.createCharacter();
    }
  }
  createCharacter() {
    if (this.transaction == false) {
      this.transaction = true;
      ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: data.account,
          to: databaseInformation.creator,
          value: ethers.utils.parseEther(databaseInformation.ticket)._hex,
          chainId: ethers.utils.hexValue(56),
        }],
      }).then(() => {
        localStorage.setItem("statistics", JSON.stringify(this.player.statistics));
        location.reload();
      }).catch(() => {
        this.transaction = false;
        alert("error, create character");
      });
    }
  }
  drawStatistics() {
    let statistics = this.player.statistics;
    text(`name ${statistics.name}`, 50, 80, 25);
    text(`strength ${statistics.strength}`, 50, 110, 25);
    text(`endurance ${statistics.endurance}`, 50, 140, 25);
    text(`health ${statistics.health}`, 50, 170, 25);
    text(`speed ${statistics.speed}`, 50, 200, 25);
  }
  draw() {
    engine.image(this.interfaceEmpty, 0, 0, 640, 360);
    text("character", 50, 50, 25);
    this.drawStatistics();
    rect(50, 230, 170, 35, "#000");
    text(" new character", 50, 255, 25);
    rect(50, 280, 170, 35, "#000");
    text(" new character", 50, 305, 25);
    this.player.draw();
  }
}