import porcentageWidth from "../porcentageWidth.js";
import porcentageHeight from "../porcentageHeight.js";
export default class {
  constructor(transform, index, fullLoad) {
    this.transform = transform;
    this.index = index;
    this.fullLoad = fullLoad;
    this.animation = "down";
    this.setTransform(this.transform.x, this.transform.y, this.transform.width, this.transform.height);
    this.setImgs();
  }
  setImgs() {
    this.imgs = {};
    let url = `./Graficos/player/head/${this.index}.png`;
    engine.loadImage(url, img => {
      this.loadImg(img);
    });
  }
  loadImg(img) {
    let width = 17;
    let animations = ["down", "right", "left", "up"];
    for (let i in animations) {
      let animation = animations[i];
      let x = i * width;
      this.imgs[animation] = img.get(x, 0, width, 17);
    }
    this.fullLoad();
  }
  setTransform(x, y, width, height) {
    this.transform = { x, y, width: width / 2, height: height / 2 };
    this.transform.x -= this.transform.width;
    this.transform.y -= this.transform.height;
    this.transform.x += this.transform.width / 2;
  }
  draw() {
    let x = porcentageWidth(this.transform.x);
    let y = porcentageHeight(this.transform.y);
    let width = porcentageWidth(this.transform.width);
    let height = porcentageHeight(this.transform.height);
    let img = this.imgs[this.animation];
    engine.image(img, x, y, width, height);
  }
  setAnimation(animation) {
    this.animation = animation;
  }
}