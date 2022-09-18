export default class {
  constructor(image, x, y, width, height) {
    this.image = image;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  collision(x, y) {
    x = parseInt(x / this.width);
    y = parseInt(y / this.height);
    return this.x == x && this.y == y;
  }
  draw() {
    let x = this.x * this.width;
    let y = this.y * this.height;
    utils.image(this.image, x, y, this.width, this.height);
  }
}