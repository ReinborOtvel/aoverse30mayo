export default class Click {
  constructor() {
    window.Main.Canvas.addEventListener('click', event => {
      this.call(event);
    });
  }
  call(event) {
    this.x = event.x;
    this.y = event.y;
    this.used = false;
  }
  use() {
    if (this.used === false) {
      this.used = true;
      return true;
    }
    return false;
  }
  verify(x, y, xEnd, yEnd) {
    if (this.x >= x && this.x <= xEnd && this.y >= y && this.y <= yEnd) {
      return this.use();
    }
    return false;
  }
}