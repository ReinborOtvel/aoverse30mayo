export default class {
  constructor(image, width, height, x, y) {
    this.image = image;
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
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