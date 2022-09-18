import Element from "./Element.js";
export default class {
  constructor(index, x, y, width, height) {
    this.index = index;
    this.transform = { x, y, width, height };
    this.element = new Element(undefined, x, y, width, height);
    engine.loadImage(`./graphics/nature/tree/${this.index}.png`, image => {
      this.element.image = image;
    });
  }
  collision(x, y) {
    return this.element.collision(x, y);
  }
  afterEntity(yEntity) {
    let y = this.transform.y * this.transform.height;
    return yEntity < y;
  }
  draw() {
    this.element.draw();
  }
}