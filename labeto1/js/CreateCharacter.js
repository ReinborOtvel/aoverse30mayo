"use strict";
import Player from "./player/Interface.js";
import Statistics from "./player/Statistics.js";
import database from "./database.js";
import Text from "./Text.js";
import ChangingText from "./ChangingText.js";
export default class {
  constructor() {
    this.transaction = false;
    this.text = [
      new Text(5, 15, 5, "#fff", "character"),
      new Text(5, 80, 5, "#C548EE", "new character"),
      new Text(5, 90, 5, "#C548EE", "create character"),
    ];
    this.changingText = {
      name: new ChangingText(5, 25, 5, "#fff"),
      strength: new ChangingText(5, 35, 5, "#fff"),
      endurance: new ChangingText(5, 45, 5, "#fff"),
      health: new ChangingText(5, 55, 5, "#fff"),
      speed: new ChangingText(5, 65, 5, "#fff"),
    };
    this.new();
  }
  new() {
    this.player = new Player(70, 50, 40, 80, Statistics());
  }
  touchEnded() {
    if (touch.verify(5, 73, 36, 80)) {
      this.newCharacter();
    } else if (touch.verify(6, 83, 41, 89)) {
      this.createCharacter();
    }
  }
  create() {
    if (this.transaction) return;
    this.transaction = true;
    window.ethereum.request({
      method: 'eth_sendTransaction',
      params: [{
        from: window.data.metamask.account,
        to: database.creator,
        value: window.ethers.utils.parseEther(database.ticket)._hex,
        chainId: window.ethers.utils.hexValue(56),
      }],
    }).then(() => {
      let statistics = JSON.stringify(this.player.statistics);
      window.localStorage.setItem("statistics", statistics);
      window.location.reload();
    }).catch(() => {
      this.transaction = false;
    });
  }
  drawStatistics() {
    let { name, strength, endurance, health, speed } = this.player.statistics;
    this.changingText.name.draw(`name ${name}`);
    this.changingText.strength.draw(`strength ${strength}`);
    this.changingText.endurance.draw(`endurance ${endurance}`);
    this.changingText.health.draw(`health ${health}`);
    this.changingText.speed.draw(`speed ${speed}`);
  }
  draw() {
    for (let text of this.text) {
      text.draw();
    }
    this.drawStatistics();
    this.player.draw();
  }
}