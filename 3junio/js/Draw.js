import Image from "./Animation/Image.js";
export default class Draw {
  constructor() {
    this.interfaceEmpty = new Image("./img/interface/empty.png", { x: 0, y: 0, width: 640, height: 360 }, {
      x: 0, y: 0,
      width: window.Main.Canvas.width,
      height: window.Main.Canvas.height,
    });
  }
  erase() {
    window.Main.Canvas.width = window.Main.Canvas.width;
    window.Main.Canvas.height = window.Main.Canvas.height;
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
}