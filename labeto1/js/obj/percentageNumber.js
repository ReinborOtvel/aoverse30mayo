export default class {
  constructor(number) {
    this.number = number;
  }
  get width() {
    return window.data.fun.percentage.width(this.number);
  }
  get height() {
    return window.data.fun.percentage.height(this.number);
  }
}