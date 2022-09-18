import Element from "./Element.js";
export default class {
  constructor(index, x, y, width, height) {
    this.index = index;
    this.transform = { x, y, width, height };
    this.element = new Element(undefined, x, y, width, height);
    engine.loadImage(`./graphics/nature/land/${this.index}.png`, image => {
      this.element.image = image;
    });
  }
  draw() {
    this.element.draw();
  }
}