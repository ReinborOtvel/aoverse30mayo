export default class {
  constructor(transform, index, fullLoad) {
    this.transform = {};
    this.transform.x = transform.x;
    this.transform.y = transform.y;
    this.transform.width = transform.width;
    this.transform.height = transform.height;
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
    this.transform.x = x;
    this.transform.y = y;
    this.transform.width = width / 2;
    this.transform.height = height / 2;
    this.transform.x += this.transform.width / 2;
  }
  draw() {
    engine.image(this.imgs[this.animation], this.transform.x, this.transform.y, this.transform.width, this.transform.height);
  }
  setAnimation(animation) {
    this.animation = animation;
  }
}