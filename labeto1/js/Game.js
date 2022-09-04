"use strict";
import Village from "./Village.js";
import Player from "./Player.js";
import statisticsRandom from "./statisticsRandom.js";
export default class {
  setup() {
    this.village = new Village();
    this.assignPlayer();
  }
  assignPlayer() {
    if (data.database == undefined) {
      let transform = { x: 150, y: 150, width: 50, height: 50 };
      this.player = new Player(transform, statisticsRandom(), () => {
        data.canDraw = true;
      });
    } else {
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
      }).catch((error) => {
        console.error(error);
        alert("character not found");
      });
    }
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
    this.village.draw();
    this.player.draw();
  }
}