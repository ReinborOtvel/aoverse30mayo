"use strict";
export default class {
  constructor(fullLoad) {
    this.fullLoad = fullLoad;
    this.buttons();
  }
  buttons() {
    let url = "./Graficos/interface/buttons.png";
    engine.loadImage(url, img => {
      this.buttons = img;
      this.fullLoad();
    });
  }
  action(key) {
    switch (key) {
      case "q":
        break;
      case "e":
        break;
      case "r":
        break;
      case "f":
        break;
    }
  }
  draw() {
    utils.image(this.buttons, 68, 66, 30, 30);
  }
}