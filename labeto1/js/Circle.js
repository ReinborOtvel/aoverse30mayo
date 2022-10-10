import Transform from "./Transform.js";
export default class {
  constructor(x, y, diameter) {
    this.transform = new Transform(x, y, diameter);
  }
  draw() {
    let { x, y, width: diameter } = this.transform.percentage;
    engine.circle(x, y, diameter);
  }
}