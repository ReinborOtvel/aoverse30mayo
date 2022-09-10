export default class {
  constructor(url, width, height, callback) {
    this.width = width;
    this.height = height;
    engine.loadImage(url, img => {
      this.img = img;
      callback();
    });
  }
  draw(x, y) {
    engine.image(this.img, x, y, this.width, this.height);
  }
}