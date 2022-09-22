import Image from "../Image.js";
export default class Land {
  constructor(index, h, v, width, height) {
    this.index = index;
    this.h = h;
    this.v = v;
    this.width = width;
    this.height = height;
    this.image = engine.loadImage(`./graphics/nature/land/${this.index}.png`);
    this.x = this.h * this.width;
    this.y = this.v * this.height;
    this.image = new Image(this.image, this.x, this.y, this.width, this.height);
  }
  draw() {
    this.image.draw();
  }
}