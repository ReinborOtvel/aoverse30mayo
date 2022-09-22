"use strict";
export default class {
  constructor(index, x, y, width, height) {
    this.index = index;
    this.x = x;
    this.images = { down: [], up: [], left: [], right: [] };
    engine.loadImage(`./player/armor/${this.index}.png`, image => {
      let width = 25;
      let height = 45;
      for (let h = 0; h < 6; h++) {
        let x = h * width;
        this.images.down[h] = image.get(x, 0, width, height);
        this.images.up[h] = image.get(x, height, width, height);
      }
      for (let h = 0; h < 5; h++) {
        let x = h * width;
        this.images.left[h] = image.get(x, 2 * height, width, height);
        this.images.right[h] = image.get(x, 3 * height, width, height);
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