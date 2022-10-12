export default {
  setup() {
    window.data.percentage.horizontal = window.data.engine.width / 100;
    window.data.percentage.vertical = window.data.engine.height / 100;
  },
  width(percentage) {
    return window.data.percentage.horizontal * percentage;
  },
  height(percentage) {
    return window.data.percentage.vertical * percentage;
  }
}