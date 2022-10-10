"use strict";
import AnimationVertical from "../AnimationVertical.js";
export default class {
  constructor(index, x, y, width, height) {
    x -= width / 2;
    y -= height / 2;
    this.sprites(index, x, y, width, height);
    this.animation = "down";
    this.sprite = 0;
  }
  sprites(index, x, y, width, height) {
    let url = `./player/armor/${index}.png`;
    let animations = ["down", "up", "left", "right"];
    let lengths = [6, 6, 5, 5];
    this.animation = new AnimationVertical(x, y, width, height, url, 25, 45, animations, lengths);
  }
  draw() {
    this.animation.draw(this.animation, this.sprite);
  }
}