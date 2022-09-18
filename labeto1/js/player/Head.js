"use strict";
export default class {
  constructor(x, y, width, height, index) {
    this.setTransform(x, y, width, height);
    this.index = index;
    this.animation = "down";
    this.imgs();
  }
  imgs() {
    this.imgs = {};
    engine.loadImage(`./player/head/${this.index}.png`, img => {
      let width = 17;
      let animations = ["down", "right", "left", "up"];
      for (let i in animations) {
        let animation = animations[i];
        let x = i * width;
        this.imgs[animation] = img.get(x, 0, width, 17);
      }
    });
  }
  setTransform(x, y, width, height) {
    this.transform = { x, y, width: width / 2, height: height / 2 };
    this.transform.x -= this.transform.width;
    this.transform.y -= this.transform.height;
    this.transform.x += this.transform.width / 2;
  }
  draw() {
    let img = this.imgs[this.animation];
    utils.image(img, this.transform.x, this.transform.y, this.transform.width, this.transform.height);
  }
  setAnimation(animation) {
    this.animation = animation;
  }
}