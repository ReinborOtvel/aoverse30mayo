import Transform from "./Transform.js";
export default class {
  constructor(x, y, width, text, color) {
    this.transform = new Transform(x, y, width);
    this.text = text;
    this.color = color;
  }
  draw() {
    let { x, y, width } = this.transform.percentage;
    window.data.engine.textSize(width);
    window.data.engine.fill(this.color);
    window.data.engine.text(this.text, x, y);
  }
}