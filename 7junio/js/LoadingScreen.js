import Image from "./Animation/Image.js";
export default class LoadingScreen {
  constructor() {
    this.src = "./img/loadingScreen/${index}.png";
    this.index = 0;
    this.maximum = 13;
    this.endChange = 200;
    this.timerChange = 0;
  }
  stop() {
    this.index = this.maximum + 1;
  }
  change() {
    if (this.index <= this.maximum) {
      let src = this.src.replace("${index}", this.index);
      this.Image = new Image(src, { x: 0, y: 0 }, {
        x: 0, y: 0,
        width: window.Main.Canvas.width,
        height: window.Main.Canvas.height,
      });
      this.Image.width = this.Image.src.width;
      this.Image.height = this.Image.src.height;
      this.index++;
    }
  }
  update(ms, deltaTime) {
    if (this.timerChange <= 0) {
      this.timerChange = this.endChange;
      this.change();
    } else {
      this.timerChange -= ms;
    }
    this.Image.update();
  }
}