import Transform from "./Transform.js";
export default class {
  constructor(x, y, width, height, url) {
    this.transform = new Transform(x, y, width, height);
    this.image = window.data.engine.loadImage(url);
  }
  draw() {
    let { x, y, width, height } = this.transform.getPercentage();
    window.data.engine.noSmooth();
    window.data.engine.image(this.image, x, y, width, height);
  }
}