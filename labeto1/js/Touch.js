import PercentagePixel from "./PercentagePixel.js";
export default {
  setup() {
    this.percentagePixel = new PercentagePixel();
    window.data.engine.touchStarted = this.touchStarted;
    window.data.engine.touchMoved = this.touchMoved;
    window.data.engine.touchEnded = this.touchEnded;
  },
  verify(xInit, yInit, xEnd, yEnd) {
    return this.x >= xInit &&
      this.x <= xEnd &&
      this.y >= yInit &&
      this.y <= yEnd;
  },
  set() {
    this.x = this.percentagePixel.width(window.data.engine.mouseX);
    this.y = this.percentagePixel.height(window.data.engine.mouseY);
  },
  touchStarted() {
    this.set();
    window.data.page.touchStarted();
    console.log(this.x, this.y);
  },
  touchMoved() {
    touch.set();
    window.data.page.touchMoved();
  },
  touchEnded() {
    touch.set();
    window.data.page.touchEnded();
  }
}