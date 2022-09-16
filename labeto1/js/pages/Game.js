"use strict";
import Player from "../player/Control.js";
export default class {
  setup() {
    this.player();
  }
  player() {
    metamask.database.getAccount(metamask.account).then(_account => {
      let owner = _account.owner.toUpperCase();
      let account = metamask.account.toUpperCase();
      if (owner == account) {
        let transform = { x: 50, y: 50, width: 5, height: 10 };
        let statistics = JSON.parse(_account.statistics);
        this.player = new Player(transform, statistics, () => {
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
    this.player.draw();
  }
}