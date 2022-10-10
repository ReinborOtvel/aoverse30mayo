export default class {
  constructor() {
    this.horizontal = engine.width / 100;
    this.vertical = engine.height / 100;
  }
  width(percentage) {
    return this.horizontal * percentage;
  }
  height(percentage) {
    return this.vertical * percentage;
  }
}