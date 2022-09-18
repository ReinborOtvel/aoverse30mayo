"use strict";
export default class {
  constructor(parts) {
    this.parts = parts;
    this.entity = this.parts.entity;
    this.imgs = { down: [], up: [], left: [], right: [] };
    engine.loadImage(`./player/armor/${this.entity.statistics.armor}.png`, img => {
      let width = 25;
      let height = 45;
      for (let h = 0; h < 6; h++) {
        let x = h * width;
        this.imgs.down[h] = img.get(x, 0, width, height);
        this.imgs.up[h] = img.get(x, height, width, height);
      }
      for (let h = 0; h < 5; h++) {
        let x = h * width;
        this.imgs.left[h] = img.get(x, 2 * height, width, height);
        this.imgs.right[h] = img.get(x, 3 * height, width, height);
      }
    });
  }
  draw() {
    let img = this.imgs[this.parts.animation][this.parts.sprite];
    let x = this.entity.x - this.entity.width / 2;
    let y = this.entity.y - this.entity.height / 2;
    utils.image(img, x, y, this.entity.width, this.entity.height);
  }
  nextSprite() {
    if (this.parts.canNextSprite) {
      let length;
      switch (this.parts.animation) {
        case "down":
        case "up":
          length = 5;
          break;
        case "left":
        case "right":
          length = 4;
          break;
      }
      if (this.sprite < length) {
        this.sprite++;
      } else {
        this.sprite = 0;
      }
    }
  }
}