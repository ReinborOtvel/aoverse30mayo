export default class {
  constructor(url, width, height, court, callback) {
    this.width = width;
    this.height = height;
    engine.loadImage(url, img => {
      let { x, y, width, height } = court;
      this.img = img.get(x, y, width, height);
      callback();
    });
  }
  draw(x, y) {
    engine.image(this.img, x, y, this.width, this.height);
  }
}