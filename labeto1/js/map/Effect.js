import Image from "../Image.js";
export default class Effect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.image = engine.loadImage("./graphics/effects/1.png");
    this.image = new Image(this.image, this.x, this.y, this.width, this.height);
    this.active = false;
  }
  setActive() {
    this.active = true;
    setTimeout(() => {
      this.active = false;
    }, 200);
  }
  draw() {
    if (this.active == true) {
      this.image.draw();
    }
  }
}