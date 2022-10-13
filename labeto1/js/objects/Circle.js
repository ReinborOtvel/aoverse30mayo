import Transform from "./Transform.js";
export default class {
  constructor(x, y, diameter) {
    this.transform = new Transform(x, y, diameter);
  }
  draw() {
    let { x, y, width } = this.transform.percentage;
    window.data.engine.circle(x, y, width);
  }
}