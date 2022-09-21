import Percentage from "./Percentage.js";
export default class {
  constructor(text, x, y, size, color) {
    this.text = text;
    this.x = Percentage.width(x);
    this.y = Percentage.height(y);
    this.size = Percentage.width(size);
    this.color = color;
  }
  draw() {
    engine.textSize(this.size);
    engine.fill(this.color);
    engine.text(this.text, this.x, this.y);
  }
}