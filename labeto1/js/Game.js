"use strict";
import Player from "./player/Player.js";
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
        page.player = new Player();
        let x = 70;
        let y = 70;
        let width = 5;
        let height = 10;
        let statistics = JSON.parse(_account.statistics);
        page.player.setup(x, y, width, height, statistics);
      }
    });
  }
  keyTyped() {
    if (page.player != undefined) {
      page.player.keyTyped();
    }
  }
  keyReleased() {
    if (page.player != undefined) {
      page.player.keyReleased();
    }
  }
  touchStarted() {
    if (page.player != undefined) {
      page.player.touchStarted();
    }
  }
  touchMoved() {
    if (page.player != undefined) {
      page.player.touchMoved();
    }
  }
  touchEnded() {
    if (page.player != undefined) {
      page.player.touchEnded();
    }
  }
  draw() {
    page.map.draw();
    if (page.player != undefined) {
      page.player.draw();
    }
  }
}