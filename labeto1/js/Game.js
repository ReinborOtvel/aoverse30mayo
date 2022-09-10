"use strict";
import Map from "./Map.js";
import PlayerControl from "./player/Control.js";
export default class {
  setup() {
    this.elements = [];
    this.assignMap();
  }
  assignMap() {
    this.map = new Map(() => {
      this.assignPlayer();
    });
  }
  assignPlayer() {
    data.database.getAccount(data.account).then(_account => {
      let owner = _account.owner.toUpperCase();
      let account = data.account.toUpperCase();
      if (owner == account) {
        let transform = { x: 200, y: 200, width: 50, height: 50 };
        let statistics = JSON.parse(_account.statistics);
        this.player = new PlayerControl(transform, statistics, () => {
          data.canDraw = true;
        });
      } else {
        alert("character not found");
      }
    }).catch((error) => {
      console.error(error);
      alert("character not found");
    });
  }
  keyup() {
    this.player.keyup();
  }
  keydown() {
    this.player.keydown();
  }
  click() {
    this.player.click();
  }
  draw() {
    this.elements = [];
    this.map.draw();
  }
}