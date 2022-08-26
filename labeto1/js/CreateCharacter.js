"use strict";
import verifyClick from "./verifyClick.js";
import statisticsRandom from "./statisticsRandom.js";
import databaseInformation from "./databaseInformation.js";
import Player from "./Player.js";
import textBackground from "./textBackground.js";
export default class {
  setup() {
    this.interfaceEmpty = engine.loadImage("./Graficos/Interfaces/empty.png");
    this.transaction = false;
    this.newCharacter();
  }
  newCharacter() {
    if (this.player == undefined || this.player.load == true) {
      this.player = new Player({ x: 300, y: 70, width: 150, height: 150, }, statisticsRandom());
    }
  }
  click() {
    if (verifyClick(50, 280, 260, 320)) {
      this.newCharacter();
    } else if (verifyClick(300, 280, 550, 320)) {
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
        engine.storeItem("statistics", JSON.stringify(this.player.statistics));
        location.reload();
      }).catch(() => {
        alert("error, create character");
        this.transaction = false;
      });
    }
  }
  drawStatistics() {
    let statistics = this.player.statistics;
    engine.text(`name ${statistics.name}`, 30, 90);
    engine.text(`strength ${statistics.strength}`, 30, 120);
    engine.text(`endurance ${statistics.endurance}`, 30, 150);
    engine.text(`health ${statistics.health}`, 30, 180);
    engine.text(`speed ${statistics.speed}`, 30, 210);
  }
  draw() {
    engine.image(this.interfaceEmpty, 0, 0, 640, 360);
    engine.text("character", 30, 60);
    textBackground(40, 270, " new character ");
    textBackground(290, 270, " create character ");
    this.drawStatistics();
    this.player.draw();
  }
}