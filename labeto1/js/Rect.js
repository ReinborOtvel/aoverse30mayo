export default class {
  constructor(x, y, width, height, color) {
    this.x = utils.percentageWidth(x);
    this.y = utils.percentageHeight(y);
    this.width = utils.percentageWidth(width);
    this.height = utils.percentageHeight(height);
    this.color = color;
  }
  draw() {
    engine.fill(this.color);
    engine.rect(this.x, this.y, this.width, this.height);
  }
}