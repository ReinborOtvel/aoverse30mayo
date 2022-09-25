export default class {
  setup() {
    engine.touchStarted = touch.touchStarted;
    engine.touchMoved = touch.touchMoved;
    engine.touchEnded = touch.touchEnded;
  }
  verify(xInit, yInit, xEnd, yEnd) {
    return touch.x >= xInit &&
      touch.x <= xEnd &&
      touch.y >= yInit &&
      touch.y <= yEnd;
  }
  set() {
    touch.x = utils.percentagePixelsWidth(engine.mouseX);
    touch.y = utils.percentagePixelsHeight(engine.mouseY);
  }
  touchStarted() {
    touch.set();
    if (page.touchStarted != undefined) {
      page.touchStarted();
    }
    console.log(touch.x, touch.y);
  }
  touchMoved() {
    touch.set();
    if (page.touchMoved != undefined) {
      page.touchMoved();
    }
  }
  touchEnded() {
    touch.set();
    if (page.touchEnded != undefined) {
      page.touchEnded();
    }
  }
}