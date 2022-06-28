import Image from "./Image.js";
export default class LoadingScreen {
  constructor() {
    this.image = new Image(undefined, { x: 0, y: 0 }, {
      x: 0, y: 0,
      width: window.main.canvas.width,
      height: window.main.canvas.height,
    });
    this.src = "./img/loadingScreen/${index}.png";
    this.index = 0;
    this.maximum = 13;
    this.endChange = 200;
    this.timerChange = 0;
    this.database = false;
  }
  change() {
    if (this.index > this.maximum) {
      if (this.database === true) {
        return;
      }
      if (window.main.database.page === undefined) {
        return;
      }
      window.main.page = window.main.database.page;
      this.database = true;
      return;
    }
    let src = this.src.replace("${index}", this.index);
    this.image.setSrc(src);
    this.image.width = this.image.src.width;
    this.image.height = this.image.src.height;
    this.index++;
  }
  update() {
    if (this.timerChange <= 0) {
      this.timerChange = this.endChange;
      this.change();
    } else {
      this.timerChange -= window.main.ms;
    }
    this.image.update();
  }
}