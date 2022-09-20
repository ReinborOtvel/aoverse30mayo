export default class {
  constructor(image, x, y, width, height) {
    this.image = image;
    this.x = utils.percentageWidth(x);
    this.y = utils.percentageHeight(y);
    this.width = utils.percentageWidth(width);
    this.height = utils.percentageHeight(height);
  }
  draw() {
    if (this.image == undefined) {
      return;
    }
    engine.image(this.image, this.x, this.y, this.width, this.height);
  }
}