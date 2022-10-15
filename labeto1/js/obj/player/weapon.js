"use strict";
export default class {
  constructor(x, y, width, height, index) {
    this.animation = "down";
    this.sprite = 0;
    this.animations = new window.data.obj.animationVertical(
      x, y, width, height,
      `./player/weapon/${index}.png`, 25, 45,
      ["down", "up", "left", "right"], [6, 6, 5, 5]
    );
    this.setTransform(x, y, width, height);
  }
  setTransform(x, y, width, height) {
    x -= width / 2;
    y -= height / 2;
    this.animations.setTransform(x, y, width, height);
  }
  draw() {
    this.animations.draw(this.animation, this.sprite);
  }
}