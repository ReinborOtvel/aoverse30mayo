export default {
  page(name) {
    window.data.pages.name = name;
    window.data.pages.setup();
  },
  draw() {
    window.data.pages.draw();
  },
  setup() {
    window.data.engine.createCanvas(852, 480);
    window.data.engine.frameRate(15);
    window.data.touch.setup();
    window.data.key.setup();
    window.data.metamask.setup();
    window.data.background = new window.data.objects.Rect(0, 0, 100, 100, "#2B2B2B");
    window.data.alert = new window.data.objects.ChangingText(5, 30, 10, "#fff");
  }
}