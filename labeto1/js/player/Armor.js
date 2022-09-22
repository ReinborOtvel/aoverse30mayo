"use strict";
export default class {
  constructor(index, x, y, width, height) {
    this.index = index;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.animation = "down";
    this.sprite = 0;
    this.canNextSprite = false;
    this.setImages();
  }
  setImages() {
    this.images = { down: [], up: [], left: [], right: [] };
    engine.loadImage(`./player/armor/${this.index}.png`, image => {
      let width = 25;
      let height = 45;
      for (let h = 0; h < 6; h++) {
        let x = h * width;
        this.images.down[h] = image.get(x, 0, width, height);
        this.images.up[h] = image.get(x, height, width, height);
        if (h < 5) {
          this.images.left[h] = image.get(x, 2 * height, width, height);
          this.images.right[h] = image.get(x, 3 * height, width, height);
        }
      }
    });
  }
  setTransform(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  setAnimation(newAnimation) {
    if (this.animation != newAnimation) {
      this.animation = newAnimation;
      this.sprite = 0;
    }
  }
  draw() {
    let image = this.images[this.animation][this.sprite];
    let x = this.x - this.width / 2;
    let y = this.y - this.height / 2;
    if (image == undefined) {
      return;
    }
    utils.image(image, x, y, this.width, this.height);
  }
  nextSprite() {
    if (this.canNextSprite) {
      let length;
      if (this.animation == "down" || this.animation == "up") {
        length = 5;
      } else if (this.animation == "left" || this.animation == "right") {
        length = 4;
      } else {
        return;
      }
      if (this.sprite >= length) {
        this.sprite = 0;
      } else {
        this.sprite++;
      }
    }
  }
}