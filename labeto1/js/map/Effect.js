export default class {
  constructor(index, x, y, width, height) {
    this.index = index;
    this.image = engine.loadImage(`./graphics/effects/${this.index}.png`);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  draw() {
    utils.image(this.image, this.x, this.y, this.width, this.height);
  }
}