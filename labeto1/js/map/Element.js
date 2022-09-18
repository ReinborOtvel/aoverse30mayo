export default class {
  constructor(image, h, v, width, height) {
    this.image = image;
    this.h = h;
    this.v = v;
    this.width = width;
    this.height = height;
    this.x = this.h * this.width;
    this.y = this.v * this.height;
  }
  collision(x, y) {
    let h = parseInt(x / this.width);
    let v = parseInt(y / this.height);
    return this.h == h && this.v == v;
  }
  draw() {
    utils.image(this.image, this.x, this.y, this.width, this.height);
  }
}