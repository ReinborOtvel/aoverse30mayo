import Image from "./Image.js";
export default class Draw {
  constructor() {
    this.interfaceEmpty = new Image("./img/interface/empty.png", {
      x: 0, y: 0, width: 640, height: 360
    }, {
      x: 0, y: 0,
      width: window.main.canvas.width,
      height: window.main.canvas.height,
    });
  }
  image(src, image, transform) {
    window.main.ctx.imageSmoothingEnabled = false;
    window.main.ctx.drawImage(
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
    window.main.ctx.fillStyle = fillStyle;
    window.main.ctx.fillRect(x, y, width, height);
  }
  strokeRectEnd(strokeStyle, x, y, xEnd, yEnd) {
    let { width, height } = this.size(x, y, xEnd, yEnd);
    this.strokeRect(strokeStyle, x, y, width, height);
  }
  strokeRect(strokeStyle, x, y, width, height) {
    window.main.ctx.strokeStyle = strokeStyle;
    window.main.ctx.strokeRect(x, y, width, height);
  }
  text(fillStyle, text, x, y, font) {
    window.main.ctx.font = font;
    window.main.ctx.fillStyle = fillStyle;
    window.main.ctx.fillText(text, x, y);
  }
  paragraph(texts, x, y, size) {
    for (let i = 0; i < texts.length; i++) {
      let text = texts[i];
      this.word(text, x, y, size);
      y += size;
    }
  }
  word(text, x, y, size) {
    this.text("#fff", text, x, y + size, `${size}px Arial`);
  }
}