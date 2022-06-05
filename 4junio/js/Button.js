import Image from "./Animation/Image.js";

export default class Button {
  constructor(text, Transform, clickCall) {
    this.text = text;
    this.Transform = Transform;
    this.clickCall = clickCall;
    this.src = "./img/interface/button.png";
    this.image = { x: 0, y: 0, width: 369, height: 26 };
    this.Image = new Image(this.src, this.image, this.Transform);
    this.xInitial = this.Transform.x;
    this.xEnd = this.xInitial + this.Transform.width;
    this.yInitial = this.Transform.y;
    this.yEnd = this.yInitial + this.Transform.height;
    this.size = this.Transform.height;
  }
  click() {
    if (window.Main.Click.verify(this.xInitial, this.yInitial, this.xEnd, this.yEnd) === true) {
      this.clickCall();
    }
  }
  draw() {
    this.Image.draw();
    let xInitial = this.xInitial + this.size;
    window.Main.Text.word(this.text, xInitial, this.yInitial, this.size);
  }
}