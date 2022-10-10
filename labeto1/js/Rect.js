import Transform from "./Transform.js";
export default class {
  constructor(x, y, width, height, color) {
    this.transform = new Transform(x, y, width, height);
    this.color = color;
  }
  draw() {
    let { x, y, width, height } = this.transform.percentage;
    engine.fill(this.color);
    engine.rect(x, y, width, height);
  }
}