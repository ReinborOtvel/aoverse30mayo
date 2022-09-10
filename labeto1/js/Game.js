"use strict";
import Map from "./Map.js";
import PlayerControl from "./player/Control.js";
export default class {
  setup() {
    this.elements = [];
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
    this.elements = [];
    for (let h = 0; h < 13; h++) {
      for (let v = 0; v < 8; v++) {
        let width = 50;
        let height = 50;
        let x = width * h;
        let y = height * v;
        this.elements.push(this.map.element("grass", x, y, width, height));
      }
    }
    for (let h = 0; h < 13; h++) {
      let x = 50 * h;
      for (let v = 5; v <= 5.5; v += .5) {
        let y = 50 * v;
        this.elements.push(this.map.element("earth", x, y, 50, 50));
      }
    }
    for (let h = 0; h < 13; h++) {
      let width = 100;
      let height = 100;
      let x = width * h;
      this.elements.push(this.map.element("tree", x, 0, width, height));
      if (h >= 2 && h < 4) {
        continue;
      }
      this.elements.push(this.map.element("tree", x + 50, 50, width, height));
      this.elements.push(this.map.element("tree", x, 100, width, height));
    }
    this.elements.push(this.map.element("portal", 250, 80, 200, 200));
    for (let i = -1; i < 22; i++) {
      let x = 30 * i;
      this.elements.push(this.map.element("bush", x, 310, 100, 100));
    }
    for (let i = -1; i < 3; i++) {
      let x = 30 * i;
      this.elements.push(this.map.element("bush", x, 165, 100, 100));
    }
    this.elements.push(this.player);
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].draw();
    }
    for (let filled in this.elements) {
      let worth = {};
      let compared = {};
      for (worth.i in this.elements) {
        worth.element = this.elements[worth.i];
        worth.y = worth.element.transform.y;
        for (compared.i in this.elements) {
          compared.element = this.elements[compared.i];
          compared.y = compared.element.transform.y;
          if (worth.y < compared.y) {
            this.elements[worth.i] = compared.element;
            this.elements[compared.i] = worth.element;
            break;
          }
        }
      }
    }
    for (let i = 0; i < this.elements.length; i++) {
      this.elements[i].draw();
    }
  }
}