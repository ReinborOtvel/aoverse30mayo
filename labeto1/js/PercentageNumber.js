import Percentage from "./Percentage.js";
export default class {
  constructor(number) {
    this.percentage = new Percentage();
    this.number = number;
  }
  get width() {
    return this.percentage.width(this.number);
  }
  get height() {
    return this.percentage.height(this.number);
  }
}