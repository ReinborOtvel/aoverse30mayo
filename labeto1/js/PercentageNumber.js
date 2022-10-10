import Percentage from "./Percentage.js";
export default class {
  constructor(number) {
    this.percentage = new Percentage();
    this.set(number);
  }
  get() {
    return this.number;
  }
  set(number) {
    if (number == undefined) return;
    this.number = number;
  }
  percentageWidth() {
    return this.percentage.width(this.number);
  }
  percentageHeight() {
    return this.percentage.height(this.number);
  }
}