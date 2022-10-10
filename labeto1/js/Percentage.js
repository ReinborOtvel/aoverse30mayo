export default class {
  constructor() {
    this.horizontal = window.data.engine.width / 100;
    this.vertical = window.data.engine.height / 100;
  }
  width(percentage) {
    return this.horizontal * percentage;
  }
  height(percentage) {
    return this.vertical * percentage;
  }
}