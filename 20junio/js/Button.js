import Image from "./Animation/Image.js";

export default class Button {
  constructor(text, Transform, clickCall) {
    this.text = text;
    this.clickCall = clickCall;
    this.Image = new Image("./img/interface/button.png", {
      x: 0, y: 0, width: 369, height: 26
    }, Transform);
    this.xInitial = this.Image.Transform.x;
    this.xEnd = this.xInitial + this.Image.Transform.width;
    this.yInitial = this.Image.Transform.y;
    this.yEnd = this.yInitial + this.Image.Transform.height;
    this.size = this.Image.Transform.height;
  }
  update() {
    if (window.Main.Click.verify(this.xInitial, this.yInitial, this.xEnd, this.yEnd) === true) {
      this.clickCall();
    }
    this.Image.update();
    let xInitial = this.xInitial + this.size;
    window.Main.Text.word(this.text, xInitial, this.yInitial, this.size);
  }
}