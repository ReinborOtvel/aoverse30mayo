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
    if (window.page == undefined) {
      return;
    } if (page.touchStarted == undefined) {
      return;
    }
    page.touchStarted();
  }
  touchMoved() {
    this.set();
    if (window.page == undefined) {
      return;
    } if (page.touchMoved == undefined) {
      return;
    }
    page.touchMoved();
  }
  touchEnded() {
    this.set();
    if (window.page == undefined) {
      return;
    } if (page.touchEnded == undefined) {
      return;
    }
    page.touchEnded();
  }
}