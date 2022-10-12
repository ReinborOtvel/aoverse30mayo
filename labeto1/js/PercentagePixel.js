export default {
  setup() {
    window.data.percentagePixel.horizontal = window.data.percentage.width(1);
    window.data.percentagePixel.vertical = window.data.percentage.height(1);
  },
  width(pixels) {
    return parseInt(pixels / window.data.percentagePixel.horizontal);
  },
  height(pixels) {
    return parseInt(pixels / window.data.percentagePixel.vertical);
  }
}