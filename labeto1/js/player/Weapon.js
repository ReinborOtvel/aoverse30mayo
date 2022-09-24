"use strict";
export default class {
  constructor(index, x, y, width, height) {
    this.index = index;
    this.setTransform(x, y, width, height);
    this.animation = "down";
    this.sprite = 0;
    this.canNextSprite = false;
    this.setImages();
  }
  setAnimation(newAnimation) {
    if (this.animation != newAnimation) {
      this.animation = newAnimation;
      this.sprite = 0;
    }
  }
  setTransform(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  setImages() {
    this.images = { down: [], up: [], left: [], right: [] };
    engine.loadImage(`./player/weapon/${this.index}.png`, image => {
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
          this.images[animation][h] = image.get(x, y, width, height);
        }
      }
    });
  }
  draw() {
    let x = this.x - (this.width / 2);
    let y = this.y - (this.height / 2);
    let image = this.images[this.animation][this.sprite];
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