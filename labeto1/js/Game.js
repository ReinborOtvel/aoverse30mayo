"use strict";
import Map from "./Map.js";
import PlayerControl from "./player/Control.js";
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
        let transform = { x: 200, y: 200, width: 50, height: 50 };
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
    this.map.draw();
    this.player.draw();
    if (this.player.transform.x > 640) {
      let { y, width, height } = this.player.transform;
      this.player.setTransform(0, y, width, height);
      this.map.index++;
    }
    else if (this.player.transform.x < 0) {
      let { y, width, height } = this.player.transform;
      this.player.setTransform(640, y, width, height);
      this.map.index--;
    }
  }
}