export default class {
  constructor(x, y, diameter) {
    this.x = utils.percentageWidth(x);
    this.y = utils.percentageHeight(y);
    this.diameter = utils.percentageWidth(diameter);
  }
  draw() {
    engine.circle(this.x, this.y, this.diameter);
  }
}