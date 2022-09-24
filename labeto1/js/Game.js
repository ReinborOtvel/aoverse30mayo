"use strict";
import Player from "./player/Control.js";
import Map from "./map/Map.js";
export default class {
  setup() {
    this.map = new Map();
    this.setPlayer();
  }
  setPlayer() {
    metamask.database.getAccount(metamask.account).then(_account => {
      let owner = _account.owner.toUpperCase();
      let account = metamask.account.toUpperCase();
      if (owner == account) {
        let statistics = JSON.parse(_account.statistics);
        this.player = new Player(70, 70, 5, 10, statistics, this.map);
      } else {
        alert("character not found");
      }
    }).catch(error => {
      console.error(error);
      alert("character not found");
    });
  }
  keyTyped() {
    if (this.player != undefined) {
      this.player.keyTyped();
    }
  }
  keyReleased() {
    if (this.player != undefined) {
      this.player.keyReleased();
    }
  }
  touchStarted() {
    if (this.player != undefined) {
      this.player.touchStarted();
    }
  }
  touchMoved() {
    if (this.player != undefined) {
      this.player.touchMoved();
    }
  }
  touchEnded() {
    if (this.player != undefined) {
      this.player.touchEnded();
    }
  }
  draw() {
    this.map.draw();
    if (this.player != undefined) {
      this.player.draw();
    }
  }
}