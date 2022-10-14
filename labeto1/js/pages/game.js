"use strict";
export default class {
  setup() {
    this.map = new window.data.obj.map();
    this.setPlayer();
  }
  setPlayer() {
    metamask.database.getAccount(metamask.account).then(_account => {
      let owner = _account.owner.toUpperCase();
      let account = metamask.account.toUpperCase();
      if (owner == account) {
        page.player = new window.data.obj.player.entity({
          map: this.map,
        });
        page.player.setup({
          x: 70,
          y: 70,
          width: 5,
          height: 10,
          statistics: JSON.parse(_account.statistics),
        });
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