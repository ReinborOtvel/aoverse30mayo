export default {
  width(percentage) {
    let horizontal = window.data.engine.width / 100;
    return horizontal * percentage;
  },
  height(percentage) {
    let vertical = window.data.engine.height / 100;
    return vertical * percentage;
  }
}