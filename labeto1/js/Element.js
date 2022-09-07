export default class {
  constructor(url, width, height, callback) {
    this.width = width;
    this.height = height;
    this.cuts = [];
    engine.loadImage(url, image => {
      this.image = image;
      callback();
    });
  }
  court(x, y, width, height) {
    let image = this.image.get(x, y, width, height);
    this.cuts.push(image);
  }
  drawCut(index, x, y) {
    let image = this.cuts[index];
    engine.image(image, x, y, this.width, this.height);
  }
  draw(x, y) {
    engine.image(this.image, x, y, this.width, this.height);
  }
}