export default {
  setup() {
    window.data.engine.touchStarted = window.data.events.touch.touchStarted;
    window.data.engine.touchMoved = window.data.events.touch.touchMoved;
    window.data.engine.touchEnded = window.data.events.touch.touchEnded;
  },
  verify(xInit, yInit, xEnd, yEnd) {
    return window.data.events.touch.x >= xInit &&
      window.data.events.touch.x <= xEnd &&
      window.data.events.touch.y >= yInit &&
      window.data.events.touch.y <= yEnd;
  },
  set() {
    window.data.events.touch.x = window.data.utils.percentagePixel.width(window.data.engine.mouseX);
    window.data.events.touch.y = window.data.utils.percentagePixel.height(window.data.engine.mouseY);
  },
  touchStarted() {
    window.data.events.touch.set();
    window.data.pages.call("touchStarted");
    console.log(window.data.events.touch.x, window.data.events.touch.y);
  },
  touchMoved() {
    window.data.events.touch.set();
    window.data.pages.call("touchMoved");
  },
  touchEnded() {
    window.data.events.touch.set();
    window.data.pages.call("touchEnded");
  }
}