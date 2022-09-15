"use strict";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.open = false;
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
  touchEnded() {
    if (utils.verifyClick(90, 89, 97, 97)) {
      this.open = true;
    }
    else if (this.open == true) {
      if (utils.verifyClick(80, 13, 87, 24)) {
        this.open = false;
      }
    }
  }
  keyReleased() {
    if (events.key == "g") {
      this.open = !this.open;
    }
  }
  draw() {
    if (this.open == true) {
      utils.image(this.interface, 10, 10, 80, 80);
    } else {
      utils.image(this.inventory, 90, 90, 8, 8);
    }
  }
}