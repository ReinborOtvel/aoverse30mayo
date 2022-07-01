class Transform {
  constructor({ x, y, width, height }) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
}
export default class Image {
  constructor(src, image, transform) {
    this.src = window.main.images.get(src);
    this.x = image.x;
    this.y = image.y;
    this.width = image.width;
    this.height = image.height;
    this.transform = new Transform(transform);
  }
  setSrc(src) {
    this.src = window.main.images.get(src);
  }
  update() {
    if (this.src !== undefined) {
      window.main.draw.image(this.src, this, this.transform);
    }
  }
}