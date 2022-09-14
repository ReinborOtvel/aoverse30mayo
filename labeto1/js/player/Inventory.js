"use strict";
import Defense from "./Defense.js";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.open = false;
    this.defense = new Defense();
    this.items = [0, 0, 0, 0, 0, 0, 0, 0];
    this.inventory();
  }
  interface() {
    let url = "./Graficos/interface/inventory/interface.png";
    engine.loadImage(url, img => {
      this.interface = img;
      this.fullLoad();
    });
  }
  inventory() {
    let url = "./Graficos/interface/inventory/button.png";
    engine.loadImage(url, img => {
      this.inventory = img;
      this.interface();
    });
  }
  action() {
    this.open = !this.open;
  }
  draw() {
    if (this.open == true) {
      utils.image(this.interface, 10, 10, 80, 80);
      this.defense.draw();
    } else {
      utils.image(this.inventory, 90, 90, 8, 8);
    }
  }
}