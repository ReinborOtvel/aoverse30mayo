"use strict";
import Map from "./Map.js";
import PlayerControl from "./player/Control.js";
import rect from "./rect.js";
export default class {
  setup() {
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
        let transform = { x: 320, y: 180, width: 50, height: 50 };
        let statistics = JSON.parse(_account.statistics);
        let fullLoad = () => {
          data.canDraw = true;
        }
        this.player = new PlayerControl(transform, statistics, this.map, fullLoad);
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
    rect(0, 0, 640, 360, "#000");
    this.map.draw(this.player);
    this.player.draw();
  }
}