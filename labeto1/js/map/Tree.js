import Element from "./Element.js";
export default class Tree extends Element {
  constructor(index, width, height, x, y) {
    super(null, width, height, x, y);
    this.image = engine.loadImage(`./graphics/nature/tree/${index}.png`);
  }
}