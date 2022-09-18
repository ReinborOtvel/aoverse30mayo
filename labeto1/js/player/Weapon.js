"use strict";
export default class {
  constructor(parts) {
    this.parts = parts;
    this.entity = this.parts.entity;
    this.imgs = { down: [], up: [], left: [], right: [] };
    engine.loadImage(`./player/weapon/${this.entity.statistics.weapon}.png`, img => {
      let width = 25;
      let height = 45;
      let animations = ["down", "up", "left", "right"];
      let lengths = [6, 6, 5, 5];
      for (let v in animations) {
        let animation = animations[v];
        let length = lengths[v];
        let y = v * height;
        for (let h = 0; h < length; h++) {
          let x = h * width;
          this.imgs[animation][h] = img.get(x, y, width, height);
        }
      }
    });
  }
  draw() {
    let x = this.entity.x - (this.entity.width / 2);
    let y = this.entity.y - (this.entity.height / 2);
    utils.image(this.imgs[this.parts.animation][this.parts.sprite],
      x, y, this.entity.width, this.entity.height);
  }
}