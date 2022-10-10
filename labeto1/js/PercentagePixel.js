import Percentage from "./Percentage.js";
export default class {
  constructor() {
    this.percentage = new Percentage();
    this.horizontal = this.percentage.width(1);
    this.vertical = this.percentage.height(1);
  }
  width(pixels) {
    return parseInt(pixels / this.horizontal);
  }
  height(pixels) {
    return parseInt(pixels / this.vertical);
  }
}