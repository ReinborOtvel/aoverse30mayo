export default {
  setup() {
    window.data.pages.message.text = "loading";
  },
  draw() {
    window.data.fun.rect(0, 0, 100, 100, "#2B2B2B");
    window.data.fun.text(5, 30, 10, window.data.pages.message.text, "#fff");
  }
}