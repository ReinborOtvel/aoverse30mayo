import Image from "./Image.js";
export default class Button {
  constructor(text, transform, clickCall) {
    this.text = text;
    this.clickCall = clickCall;
    this.image = new Image("./img/interface/button.png", {
      x: 0, y: 0, width: 369, height: 26
    }, transform);
    this.xInitial = this.image.transform.x;
    this.xEnd = this.xInitial + this.image.transform.width;
    this.yInitial = this.Image.Transform.y;
    this.yEnd = this.yInitial + this.image.transform.height;
    this.size = this.image.transform.height;
  }
  update() {
    if (window.main.click.verify(this.xInitial, this.yInitial, this.xEnd, this.yEnd) === true) {
      this.clickCall();
    }
    this.image.update();
    let xInitial = this.xInitial + this.size;
    window.main.text.word(this.text, xInitial, this.yInitial, this.size);
  }
}