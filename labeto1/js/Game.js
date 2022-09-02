"use strict";
import Village from "./Village.js";
import Player from "./Player.js";
export default class {
  setup() {
    this.village = new Village();
    this.assignPlayer();
  }
  assignPlayer() {
    data.database.getAccount(data.account).then(_account => {
      let owner = _account.owner.toUpperCase();
      let account = data.account.toUpperCase();
      if (owner == account) {
        let transform = { x: 150, y: 150, width: 50, height: 50 };
        let statistics = JSON.parse(_account.statistics);
        this.player = new Player(transform, statistics, () => {
          data.canDraw = true;
        });
      } else {
        alert("character not found");
      }
    });
  }
  draw() {
    this.village.draw();
    this.player.draw();
  }
}