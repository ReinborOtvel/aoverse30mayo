"use strict";
import Player from "./player/Parts.js";
import Statistics from "./player/Statistics.js";
import database from "./database.js";
export default class {
  setup() {
    this.transaction = false;
    this.newCharacter();
  }
  newCharacter() {
    this.player = new Player(70, 50, 40, 80, Statistics());
  }
  touchEnded() {
    if (touch.verify(5, 73, 36, 80)) {
      this.newCharacter();
    } else if (touch.verify(6, 83, 41, 89)) {
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
          to: database.creator,
          value: ethers.utils.parseEther(database.ticket)._hex,
          chainId: ethers.utils.hexValue(56),
        }],
      }).then(() => {
        localStorage.setItem("statistics", JSON.stringify(this.player.statistics));
        location.reload();
      }).catch(() => {
        this.transaction = false;
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
    utils.text("new character", 5, 80, 5, "#C548EE");
    utils.text("create character", 5, 90, 5, "#C548EE");
    if (this.player != undefined) {
      this.drawStatistics();
      this.player.draw();
    }
  }
}