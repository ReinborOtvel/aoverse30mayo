import Transform from "./Transform.js";
export default class {
  constructor(x, y, width, text, color) {
    this.transform = new Transform(x, y, width);
    this.text = text;
    this.color = color;
  }
  draw() {
    let { x, y, width } = this.transform.percentage;
    engine.textSize(width);
    engine.fill(this.color);
    engine.text(this.text, x, y);
  }
}