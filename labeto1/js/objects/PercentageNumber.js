export default class {
  constructor(number) {
    this.number = number;
  }
  get width() {
    return window.data.percentage.width(this.number);
  }
  get height() {
    return window.data.percentage.height(this.number);
  }
}