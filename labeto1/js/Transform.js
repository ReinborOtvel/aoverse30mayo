import PercentageNumber from "./PercentageNumber.js";
export default class {
  constructor(x, y, width, height) {
    this.x = new PercentageNumber(x);
    this.y = new PercentageNumber(y);
    this.width = new PercentageNumber(width);
    this.height = new PercentageNumber(height);
  }
  setTransform(x, y, width, height) {
    this.x.number = x;
    this.y.number = y;
    this.width.number = width;
    this.height.number = height;
  }
  get number() {
    return {
      x: this.x.number,
      y: this.y.number,
      width: this.width.number,
      height: this.height.number,
    }
  }
  get percentage() {
    return {
      x: this.x.width,
      y: this.y.height,
      width: this.width.width,
      height: this.height.height,
    }
  }
}