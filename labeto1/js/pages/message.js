export default {
  setup() {
    window.data.pages.message.background = new window.data.objects.Rect(0, 0, 100, 100, "#2B2B2B");
    window.data.pages.message.alert = new window.data.objects.ChangingText(5, 30, 10, "#fff");
    window.data.pages.message.text = "loading";
  },
  draw() {
    window.data.pages.message.background.draw();
    window.data.pages.message.alert.draw(window.data.pages.message.text);
  }
}