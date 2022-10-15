export default {
  setup() {
    window.data.engine.touchStarted = window.data.obj.touch.touchStarted;
    window.data.engine.touchMoved = window.data.obj.touch.touchMoved;
    window.data.engine.touchEnded = window.data.obj.touch.touchEnded;
  },
  verify(xInit, yInit, xEnd, yEnd) {
    return window.data.obj.touch.x >= xInit &&
      window.data.obj.touch.x <= xEnd &&
      window.data.obj.touch.y >= yInit &&
      window.data.obj.touch.y <= yEnd;
  },
  set() {
    window.data.obj.touch.x = window.data.fun.percentagePixel.width(window.data.engine.mouseX);
    window.data.obj.touch.y = window.data.fun.percentagePixel.height(window.data.engine.mouseY);
  },
  touchStarted() {
    window.data.obj.touch.set();
    window.data.pages[window.data.pages.name].touchStarted();
    console.log(window.data.obj.touch.x, window.data.obj.touch.y);
  },
  touchMoved() {
    window.data.obj.touch.set();
    window.data.pages[window.data.pages.name].touchMoved();
  },
  touchEnded() {
    window.data.obj.touch.set();
    window.data.pages[window.data.pages.name].touchEnded();
  }
}