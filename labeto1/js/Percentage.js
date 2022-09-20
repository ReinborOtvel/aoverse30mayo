export default class {
  constructor() {
    this.width = engine.width / 100;
    this.height = engine.height / 100;
    this.pixelsWidth = this.getWidth(1);
    this.pixelsHeight = this.getHeight(1);
  }
  getWidth(percentage) {
    return this.width * percentage;
  }
  getHeight(percentage) {
    return this.height * percentage;
  }
  getPixelsWidth(pixels) {
    return parseInt(pixels / this.pixelsWidth);
  }
  getPixelsHeight(pixels) {
    return parseInt(pixels / this.pixelsHeight);
  }
}