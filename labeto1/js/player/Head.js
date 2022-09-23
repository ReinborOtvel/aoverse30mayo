"use strict";
export default class {
  constructor(index, x, y, width, height) {
    this.index = index;
    this.setTransform(x, y, width, height);
    this.animation = "down";
    this.setImages();
  }
  setImages() {
    this.images = {};
    engine.loadImage(`./player/head/${this.index}.png`, image => {
      let width = 17;
      let animations = ["down", "right", "left", "up"];
      for (let i in animations) {
        let animation = animations[i];
        let x = i * width;
        this.images[animation] = image.get(x, 0, width, 17);
      }
    });
  }
  draw() {
    let width = this.width / 2;
    let height = this.height / 2;
    let x = this.x - (width / 2);
    let y = this.y - height;
    let image = this.images[this.animation];
    utils.image(image, x, y, width, height);
  }
}