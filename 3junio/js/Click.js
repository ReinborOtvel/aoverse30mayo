export default class Click {
  constructor() {
    window.Main.Canvas.addEventListener('click', event => {
      this.x = event.x;
      this.y = event.y;
      console.log(this.x, this.y);
      if (window.Main.Page.click !== undefined) {
        window.Main.Page.click();
      }
    });
  }
  verify(x, y, xEnd, yEnd) {
    return this.x >= x && this.x <= xEnd && this.y >= y && this.y <= yEnd;
  }
}