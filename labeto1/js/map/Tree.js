import Element from "./Element.js";
export default class {
  constructor(index, h, v, width, height) {
    this.index = index;
    this.h = h;
    this.v = v;
    this.width = width;
    this.height = height;
    this.x = this.h * this.width;
    this.y = this.v * this.height;
    this.element = new Element(undefined, this.h, this.v, this.width, this.height);
    engine.loadImage(`./graphics/nature/tree/${this.index}.png`, image => {
      this.element.image = image;
    });
  }
  collision(x, y) {
    return this.element.collision(x, y);
  }
  draw() {
    this.element.draw();
  }
}