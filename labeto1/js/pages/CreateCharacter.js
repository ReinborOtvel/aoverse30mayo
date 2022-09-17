"use strict";
import Player from "../player/Parts.js";
export default class {
  setup() {
    this.transaction = false;
    this.newCharacter();
  }
  newCharacter() {
    let statistics = utils.statisticsRandom();
    this.player = new Player(70, 50, 40, 80, statistics);
  }
  touchEnded() {
    if (utils.verifyClick(6, 73, 37, 80)) {
      this.newCharacter();
    } else if (utils.verifyClick(6, 83, 42, 89)) {
      this.createCharacter();
    }
  }
  createCharacter() {
    if (this.transaction == false) {
      this.transaction = true;
      ethereum.request({
        method: 'eth_sendTransaction',
        params: [{
          from: metamask.account,
          to: utils.databaseInformation.creator,
          value: ethers.utils.parseEther(utils.databaseInformation.ticket)._hex,
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
    utils.text(`name ${name}`, 5, 25, 5, "#fff");
    utils.text(`strength ${strength}`, 5, 35, 5, "#fff");
    utils.text(`endurance ${endurance}`, 5, 45, 5, "#fff");
    utils.text(`health ${health}`, 5, 55, 5, "#fff");
    utils.text(`speed ${speed}`, 5, 65, 5, "#fff");
  }
  draw() {
    utils.text("character", 5, 15, 5, "#fff");
    utils.textRect(" new character", 5, 75, 34);
    utils.textRect(" create character", 5, 85, 39);
    if (this.player != undefined) {
      this.drawStatistics();
      this.player.draw();
    }
  }
}