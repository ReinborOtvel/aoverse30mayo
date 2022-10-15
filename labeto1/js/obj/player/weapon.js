"use strict";
export default class {
  constructor(x, y, width, height, index) {
    this.animation = "down";
    this.sprite = 0;
    x -= width / 2;
    y -= height / 2;
    this.sprites(x, y, width, height, index);
  }
  sprites(x, y, width, height, index) {
    let url = `./player/weapon/${index}.png`;
    let animations = ["down", "up", "left", "right"];
    let lengths = [6, 6, 5, 5];
    this.animations = new window.data.obj.animationVertical(x, y, width, height, url, 25, 45, animations, lengths);
  }
  draw() {
    this.animations.draw(this.animation, this.sprite);
  }
}