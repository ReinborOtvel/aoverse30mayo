"use strict";
import Player from "../player/Parts.js";
export default class {
  setup() {
    this.transaction = false;
    this.newCharacter();
  }
  newCharacter() {
    if (this.player == undefined || data.canDraw == true) {
      data.canDraw = false;
      let transform = { x: 70, y: 50, width: 40, height: 80, };
      let statistics = utils.statisticsRandom();
      this.player = new Player(transform, statistics, () => {
        data.canDraw = true;
      });
    }
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
    this.drawStatistics();
    utils.textRect(" new character", 5, 75, 34);
    utils.textRect(" create character", 5, 85, 39);
    this.player.draw();
  }
}