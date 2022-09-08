"use strict";
import verifyClick from "./verifyClick.js";
import statisticsRandom from "./statisticsRandom.js";
import databaseInformation from "./databaseInformation.js";
import Player from "./player/Parts.js";
import textRect from "./textRect.js";
import text from "./text.js";
export default class {
  setup() {
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
    if (verifyClick(49, 229, 260, 270)) {
      this.newCharacter();
    } else if (verifyClick(49, 279, 291, 321)) {
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
    let { name, strength, endurance, health, speed } = this.player.statistics;
    text(`name ${name}`, 50, 80, 25, "#fff");
    text(`strength ${strength}`, 50, 110, 25, "#fff");
    text(`endurance ${endurance}`, 50, 140, 25, "#fff");
    text(`health ${health}`, 50, 170, 25, "#fff");
    text(`speed ${speed}`, 50, 200, 25, "#fff");
  }
  draw() {
    text("character", 50, 50, 25, "#fff");
    this.drawStatistics();
    textRect(" new character", 50, 230, 210);
    textRect(" create character", 50, 280, 240);
    this.player.draw();
  }
}