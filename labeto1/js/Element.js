export default class {
  constructor(img, transform) {
    this.img = img;
    this.transform = transform;
  }
  draw() {
    engine.image(this.img, ...this.transform);
  }
}