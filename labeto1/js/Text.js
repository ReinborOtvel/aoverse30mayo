import Transform from "./Transform.js";
export default class {
  constructor(x, y, size, text, color) {
    this.transform = new Transform(x, y, size);
    this.text = text;
    this.color = color;
  }
  draw() {
    let { x, y, width: size } = this.transform.percentage;
    window.data.engine.textSize(size);
    window.data.engine.fill(this.color);
    window.data.engine.text(this.text, x, y);
  }
}