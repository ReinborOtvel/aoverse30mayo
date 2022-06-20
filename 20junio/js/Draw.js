import Image from "./Animation/Image.js";
export default class Draw {
  constructor() {
    this.interfaceEmpty = new Image("./img/interface/empty.png", {
      x: 0, y: 0, width: 640, height: 360
    }, {
      x: 0, y: 0,
      width: window.Main.Canvas.width,
      height: window.Main.Canvas.height,
    });
  }
  image(src, image, transform) {
    window.Main.Ctx.imageSmoothingEnabled = false;
    window.Main.Ctx.drawImage(
      src,
      image.x,
      image.y,
      image.width,
      image.height,
      transform.x,
      transform.y,
      transform.width,
      transform.height,
    );
  }
  size(x, y, xEnd, yEnd) {
    let width = xEnd - x;
    let height = yEnd - y;
    return { width, height };
  }
  fillRectEnd(fillStyle, x, y, xEnd, yEnd) {
    let { width, height } = this.size(x, y, xEnd, yEnd);
    this.fillRect(fillStyle, x, y, width, height);
  }
  fillRect(fillStyle, x, y, width, height) {
    window.Main.Ctx.fillStyle = fillStyle;
    window.Main.Ctx.fillRect(x, y, width, height);
  }
  strokeRectEnd(strokeStyle, x, y, xEnd, yEnd) {
    let { width, height } = this.size(x, y, xEnd, yEnd);
    this.strokeRect(strokeStyle, x, y, width, height);
  }
  strokeRect(strokeStyle, x, y, width, height) {
    window.Main.Ctx.strokeStyle = strokeStyle;
    window.Main.Ctx.strokeRect(x, y, width, height);
  }
  text(fillStyle, text, x, y, font) {
    window.Main.Ctx.font = font;
    window.Main.Ctx.fillStyle = fillStyle;
    window.Main.Ctx.fillText(text, x, y);
  }
}