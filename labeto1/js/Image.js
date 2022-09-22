import Percentage from "./Percentage.js";
export default class {
  constructor(image, x, y, width, height) {
    this.image = image;
    this.x = Percentage.getWidth(x);
    this.y = Percentage.getHeight(y);
    this.width = Percentage.getWidth(width);
    this.height = Percentage.getHeight(height);
  }
  draw() {
    if (this.image == undefined) {
      return;
    }
    engine.image(this.image, this.x, this.y, this.width, this.height);
  }
}