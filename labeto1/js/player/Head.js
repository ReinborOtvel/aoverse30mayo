"use strict";
export default class {
  constructor(x, y, width, height, index) {
    width /= 2;
    height /= 2;
    x -= width / 2;
    y -= height;
    this.animation = "down";
    this.sprite = 0;
    this.sprites(index, x, y, width, height);
  }
  sprites(index, x, y, width, height) {
    let url = `./player/head/${index}.png`;
    let animations = ["down", "right", "left", "up"];
    let lengths = [1, 1, 1, 1];
    this.animations = new window.data.objects.AnimationHorizontal(x, y, width, height, url, 17, 17, animations, lengths);
  }
  draw() {
    this.animations.draw(this.animation, this.sprite);
  }
}