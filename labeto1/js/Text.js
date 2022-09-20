export default class {
  constructor(text, x, y, size, color) {
    this.text = text;
    this.x = utils.percentageWidth(x);
    this.y = utils.percentageHeight(y);
    this.size = utils.percentageWidth(size);
    this.color = color;
  }
  draw() {
    engine.textSize(this.size);
    engine.fill(this.color);
    engine.text(this.text, this.x, this.y);
  }
}