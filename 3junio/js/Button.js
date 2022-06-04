import Image from "./Animation/Image.js";

export default class Button {
  constructor(text, transform, clickCall) {
    transform = JSON.parse(JSON.stringify(transform));
    this.Image = new Image("./img/interface/button.png", { x: 0, y: 0, width: 369, height: 26 }, transform);
    this.xInitial = transform.x;
    this.xEnd = this.xInitial + transform.width;
    this.yInitial = transform.y;
    this.yEnd = this.yInitial + transform.height;
    this.text = text;
    this.clickCall = clickCall;
    this.size = transform.height;
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