export default class {
  constructor(x, y, width, height, index) {
    this.animation = "down";
    this.setTransform(x, y, width, height);
    this.images = [];
    let url = `./Graficos/player/head/${index}.png`;
    engine.loadImage(url, image => {
      this.loadImage(image);
    });
  }
  loadImage(image) {
    let width = 17;
    let height = 17;
    this.images["down"] = image.get(0, 0, width, height);
    this.images["right"] = image.get(1 * width, 0, width, height);
    this.images["left"] = image.get(2 * width, 0, width, height);
    this.images["up"] = image.get(3 * width, 0, width, height);
  }
  setTransform(x, y, width, height) {
    this.width = width / 2;
    this.height = height / 2;
    this.x = x + (this.width / 2);
    this.y = y;
  }
  draw() {
    let image = this.images[this.animation];
    engine.image(image, this.x, this.y, this.width, this.height);
  }
}