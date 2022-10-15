"use strict";
export default class {
  constructor(x, y, width, height, index) {
    this.animation = "down";
    this.sprite = 0;
    this.animations = new window.data.obj.animationHorizontal(
      x, y, width, height,
      `./player/head/${index}.png`, 17, 17,
      ["down", "right", "left", "up"], [1, 1, 1, 1]
    );
    this.setTransform(x, y, width, height);
  }
  setTransform(x, y, width, height) {
    width /= 2;
    height /= 2;
    x -= width / 2;
    y -= height;
    this.animations.setTransform(x, y, width, height);
  }
  draw() {
    this.animations.draw(this.animation, this.sprite);
  }
}