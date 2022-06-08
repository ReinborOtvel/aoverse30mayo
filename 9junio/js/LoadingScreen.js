import Image from "./Animation/Image.js";
export default class LoadingScreen {
  constructor() {
    this.Image = new Image(undefined, { x: 0, y: 0 }, {
      x: 0, y: 0,
      width: window.Main.Canvas.width,
      height: window.Main.Canvas.height,
    });
    this.src = "./img/loadingScreen/${index}.png";
    this.index = 0;
    this.maximum = 13;
    this.endChange = 200;
    this.timerChange = 0;
  }
  change() {
    if (this.index <= this.maximum) {
      let src = this.src.replace("${index}", this.index);
      this.Image.setSrc(src);
      this.Image.width = this.Image.src.width;
      this.Image.height = this.Image.src.height;
      this.index++;
    }
  }
  update() {
    if (this.timerChange <= 0) {
      this.timerChange = this.endChange;
      this.change();
    } else {
      this.timerChange -= window.Main.ms;
    }
    this.Image.update();
  }
}