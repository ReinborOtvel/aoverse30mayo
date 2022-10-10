"use strict";
import AnimationHorizontal from "../AnimationHorizontal.js";
export default class {
  constructor(index, x, y, width, height) {
    this.sprites(index, x, y, width, height);
  }
  sprites(index, x, y, width, height) {
    let url = `./player/head/${index}.png`;
    let animations = ["down", "right", "left", "up"];
    let lengths = [1, 1, 1, 1];
    this.animation = new Animation(x, y, width, height, url, 17, 17, animations, lengths);
    engine.loadImage(url, image => {
      let width = 17;
      let y = 0;
      let height = 17;
      for (let h in animations) {
        let animation = animations[h];
        let x = h * width;
        this.images[animation] = image.get(x, y, width, height);
      }
    });
  }
  draw() {
    let { width, height, x, y, animation } = this.main;
    width /= 2;
    height /= 2;
    x -= (width / 2);
    y -= height;
    let image = this.images[animation];
    utils.image(image, x, y, width, height);
  }
}