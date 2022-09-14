"use strict";
import Map from "../Map.js";
import Player from "../player/Control.js";
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
    metamask.database.getAccount(metamask.account).then(_account => {
      let owner = _account.owner.toUpperCase();
      let account = metamask.account.toUpperCase();
      if (owner == account) {
        let transform = { x: 50, y: 50, width: 5, height: 10 };
        let statistics = JSON.parse(_account.statistics);
        this.player = new Player(transform, statistics, this.map, () => {
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
    utils.rect(0, 0, 640, 360, "#000");
    this.map.draw(this.player);
    this.player.draw();
  }
}