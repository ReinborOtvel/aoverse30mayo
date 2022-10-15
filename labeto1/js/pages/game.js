"use strict";
export default {
  setup() {
    this.map = new window.data.obj.map.map();
    this.setPlayer();
  },
  setPlayer() {
    window.data.obj.metamask.database.getAccount(window.data.obj.metamask.account).then(account => {
      let owner = account.owner.toUpperCase();
      let user = window.data.obj.metamask.account.toUpperCase();
      if (owner == user) {
        this.player = new window.data.obj.player.entity(70, 70, 5, 10, JSON.parse(account.statistics), this.map);
      }
    });
  },
  keyTyped() {
    if (this.player) {
      this.player.keyTyped();
    }
  },
  keyReleased() {
    if (this.player) {
      this.player.keyReleased();
    }
  },
  touchStarted() {
    if (this.player) {
      this.player.touchStarted();
    }
  },
  touchMoved() {
    if (this.player) {
      this.player.touchMoved();
    }
  },
  touchEnded() {
    if (this.player) {
      this.player.touchEnded();
    }
  },
  draw() {
    this.map.draw();
    if (this.player) {
      this.player.draw();
    }
  }
}