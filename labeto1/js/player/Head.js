"use strict";
export default class {
  constructor(main) {
    this.main = main;
  }
  setup() {
    this.setImages();
  }
  setImages() {
    this.images = {};
    let index = this.main.statistics.head;
    let url = `./player/head/${index}.png`;
    engine.loadImage(url, image => {
      let width = 17;
      let y = 0;
      let height = 17;
      let animations = ["down", "right", "left", "up"];
      for (let h in animations) {
        let animation = animations[h];
        let x = h * width;
        this.images[animation] = image.get(x, y, width, height);
      }
    });
  }
  draw() {
    let { width, height, x, y, animation } = this.main;
    width /= 2;
    height /= 2;
    x -= (width / 2);
    y -= height;
    let image = this.images[animation];
    utils.image(image, x, y, width, height);
  }
}