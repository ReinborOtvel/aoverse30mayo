export default class {
  constructor() {
    engine.touchStarted = this.touchStarted;
    engine.touchMoved = this.touchStarted;
    engine.touchEnded = this.touchStarted;
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
    this.set();
    page.touchStarted();
    console.log(touch.x, touch.y);
  }
  touchMoved() {
    this.set();
    page.touchMoved();
  }
  touchEnded() {
    this.set();
    page.touchEnded();
  }
}