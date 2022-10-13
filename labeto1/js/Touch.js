export default {
  setup() {
    window.data.engine.touchStarted = window.data.touch.touchStarted;
    window.data.engine.touchMoved = window.data.touch.touchMoved;
    window.data.engine.touchEnded = window.data.touch.touchEnded;
  },
  verify(xInit, yInit, xEnd, yEnd) {
    return window.data.touch.x >= xInit &&
      window.data.touch.x <= xEnd &&
      window.data.touch.y >= yInit &&
      window.data.touch.y <= yEnd;
  },
  set() {
    window.data.touch.x = window.data.percentagePixel.width(window.data.engine.mouseX);
    window.data.touch.y = window.data.percentagePixel.height(window.data.engine.mouseY);
  },
  touchStarted() {
    window.data.touch.set();
    if (window.data.page) {
      if (window.data.page.touchStarted) {
        window.data.page.touchStarted();
      }
    }
    console.log(window.data.touch.x, window.data.touch.y);
  },
  touchMoved() {
    window.data.touch.set();
    if (window.data.page) {
      if (window.data.page.touchMoved) {
        window.data.page.touchMoved();
      }
    }
  },
  touchEnded() {
    window.data.touch.set();
    if (window.data.page) {
      if (window.data.page.touchEnded) {
        window.data.page.touchEnded();
      }
    }
  }
}