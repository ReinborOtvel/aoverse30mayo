"use strict";
export default class {
  constructor(parts) {
    this.parts = parts;
    this.entity = this.parts.entity;
    this.imgs = {};
    engine.loadImage(`./player/head/${this.entity.statistics.head}.png`, img => {
      let width = 17;
      let animations = ["down", "right", "left", "up"];
      for (let i in animations) {
        let animation = animations[i];
        let x = i * width;
        this.imgs[animation] = img.get(x, 0, width, 17);
      }
    });
  }
  draw() {
    let width = this.entity.width / 2;
    let height = this.entity.height / 2;
    let x = this.entity.x - (width / 2);
    let y = this.entity.y - height;
    utils.image(this.imgs[this.parts.animation], x, y, width, height);
  }
}