export default class {
  constructor(transform, index, callback) {
    this.animation = "down";
    this.setTransform(transform);
    this.images = [];
    let url = `./Graficos/player/head/${index}.png`;
    engine.loadImage(url, image => {
      this.loadImage(image, callback);
    });
  }
  loadImage(image, callback) {
    let width = 17;
    let height = 17;
    this.images["down"] = image.get(0, 0, width, height);
    this.images["right"] = image.get(1 * width, 0, width, height);
    this.images["left"] = image.get(2 * width, 0, width, height);
    this.images["up"] = image.get(3 * width, 0, width, height);
    callback();
  }
  setTransform({ x, y, width, height }) {
    this.transform = {
      x, y,
      width: width / 2,
      height: height / 2
    };
    this.transform.x += this.transform.width / 2;
  }
  draw() {
    let { x, y, width, height } = this.transform;
    let image = this.images[this.animation];
    engine.image(image, x, y, width, height);
  }
}