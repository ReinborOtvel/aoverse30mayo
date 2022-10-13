export default {
  page(name) {
    window.data.namePage = name;
    window.data.pages[window.data.namePage].setup();
  },
  draw() {
    window.data.pages[window.data.namePage].draw();
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