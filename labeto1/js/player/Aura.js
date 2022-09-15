"use strict";
export default class {
  constructor(transform, fullLoad) {
    this.transform = transform;
    this.fullLoad = fullLoad;
    this.activated = false;
    this.fore();
    this.setTransform(this.transform.x, this.transform.y, this.transform.width, this.transform.height);
  }
  fore() {
    let url = "./Graficos/player/aura/fore.png";
    engine.loadImage(url, img => {
      this.fore = img;
      this.before();
    });
  }
  before() {
    let url = "./Graficos/player/aura/before.png";
    engine.loadImage(url, img => {
      this.before = img;
      this.fullLoad();
    });
  }
  setTransform(x, y, width, height) {
    this.transform = { x, y, width, height };
    this.transform.x -= this.transform.width / 2;
    this.transform.y -= this.transform.height / 2;
  }
  foreDraw() {
    if (this.activated) {
      utils.image(this.fore, this.transform.x, this.transform.y, this.transform.width, this.transform.height);
    }
  }
  beforeDraw() {
    if (this.activated) {
      utils.image(this.before, this.transform.x, this.transform.y, this.transform.width, this.transform.height);
    }
  }
  touchStarted() {
    if (utils.verifyClick(78, 60, 87, 73)) {
      this.activated = true;
    }
  }
  touchEnded() {
    if (utils.verifyClick(78, 60, 87, 73)) {
      this.activated = false;
    }
  }
  keyTyped() {
    if (events.key == "e") {
      this.activated = true;
    }
  }
  keyReleased() {
    if (events.key == "e") {
      this.activated = false;
    }
  }
}