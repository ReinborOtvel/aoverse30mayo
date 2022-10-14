export default {
  width(pixels) {
    let horizontal = window.data.fun.percentage.width(1);
    return parseInt(pixels / horizontal);
  },
  height(pixels) {
    let vertical = window.data.fun.percentage.height(1);
    return parseInt(pixels / vertical);
  }
}