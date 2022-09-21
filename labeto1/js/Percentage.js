export default {
  getWidth(percentage) {
    let width = engine.width / 100;
    return width * percentage;
  },
  getHeight(percentage) {
    let height = engine.height / 100;
    return height * percentage;
  },
  getPixelsWidth(pixels) {
    let pixelsWidth = this.getWidth(1);
    return parseInt(pixels / pixelsWidth);
  },
  getPixelsHeight(pixels) {
    let pixelsHeight = this.getHeight(1);
    return parseInt(pixels / pixelsHeight);
  }
}