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
      this.player = new Player({ x: 70, y: 50, width: 40, height: 80, }, statisticsRandom(), () => {
        data.canDraw = true;
      });
    }
  }
  click() {
    if (verifyClick(6, 73, 37, 80)) {
      this.newCharacter();
    } else if (verifyClick(6, 83, 42, 89)) {
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
    text(`name ${name}`, 5, 25, 5, "#fff");
    text(`strength ${strength}`, 5, 35, 5, "#fff");
    text(`endurance ${endurance}`, 5, 45, 5, "#fff");
    text(`health ${health}`, 5, 55, 5, "#fff");
    text(`speed ${speed}`, 5, 65, 5, "#fff");
  }
  draw() {
    text("character", 5, 15, 5, "#fff");
    this.drawStatistics();
    textRect(" new character", 5, 75, 34);
    textRect(" create character", 5, 85, 39);
    this.player.draw();
  }
}