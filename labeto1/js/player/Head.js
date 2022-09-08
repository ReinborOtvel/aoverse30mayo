export default class {
  constructor(transform, index, callback) {
    this.animation = "down";
    this.setTransform(transform);
    this.imgs = [];
    let url = `./Graficos/player/head/${index}.png`;
    engine.loadImage(url, img => {
      this.loadImg(img, callback);
    });
  }
  loadImg(img, callback) {
    let width = 17;
    let height = 17;
    this.imgs["down"] = img.get(0, 0, width, height);
    this.imgs["right"] = img.get(1 * width, 0, width, height);
    this.imgs["left"] = img.get(2 * width, 0, width, height);
    this.imgs["up"] = img.get(3 * width, 0, width, height);
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
    let img = this.imgs[this.animation];
    engine.image(img, x, y, width, height);
  }
}