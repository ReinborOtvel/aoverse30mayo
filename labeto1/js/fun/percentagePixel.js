export default {
  width(pixels) {
    let horizontal = window.data.percentage.width(1);
    return parseInt(pixels / horizontal);
  },
  height(pixels) {
    let vertical = window.data.percentage.height(1);
    return parseInt(pixels / vertical);
  }
}