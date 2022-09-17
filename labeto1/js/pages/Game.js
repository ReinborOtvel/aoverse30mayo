"use strict";
import Player from "../player/Control.js";
import Map from "../map/Map.js";
export default class {
  setup() {
    this.map = new Map();
    this.player();
  }
  player() {
    metamask.database.getAccount(metamask.account).then(_account => {
      let owner = _account.owner.toUpperCase();
      let account = metamask.account.toUpperCase();
      if (owner == account) {
        let statistics = JSON.parse(_account.statistics);
        this.player = new Player(50, 50, 5, 5, statistics, this.map);
      } else {
        alert("character not found");
      }
    }).catch((error) => {
      console.error(error);
      alert("character not found");
    });
  }
  keyTyped() {
    this.player.keyTyped();
  }
  keyReleased() {
    this.player.keyReleased();
  }
  touchStarted() {
    this.player.touchStarted();
  }
  touchMoved() {
    this.player.touchMoved();
  }
  touchEnded() {
    this.player.touchEnded();
  }
  draw() {
    this.map.draw();
    if (this.player != undefined) {
      this.player.draw();
    }
  }
}