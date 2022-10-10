import Transform from "./Transform.js";
export default class {
  constructor(x, y, width, height, url) {
    this.transform = new Transform(x, y, width, height);
    this.image = engine.loadImage(url);
  }
  draw() {
    let { x, y, width, height } = this.transform.getPercentage();
    engine.noSmooth();
    engine.image(this.image, x, y, width, height);
  }
}