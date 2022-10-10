import PercentageNumber from "./PercentageNumber.js";
export default class {
  constructor(x, y, width, height) {
    this.x = new PercentageNumber(x);
    this.y = new PercentageNumber(y);
    this.width = new PercentageNumber(width);
    this.height = new PercentageNumber(height);
  }
  set(x, y, width, height) {
    this.x.set(x);
    this.y.set(y);
    this.width.set(width);
    this.height.set(height);
  }
  get() {
    return {
      x: this.x.get(),
      y: this.y.get(),
      width: this.width.get(),
      height: this.height.get(),
    }
  }
  getPercentage() {
    return {
      x: this.x.percentageWidth(),
      y: this.y.percentageHeight(),
      width: this.width.percentageWidth(),
      height: this.height.percentageHeight(),
    }
  }
}