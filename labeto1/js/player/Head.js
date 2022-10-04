"use strict";
export default class {
  setup() {
    this.setImages();
  }
  setImages() {
    this.images = {};
    let index = page.player.statistics.head;
    let url = `./player/head/${index}.png`;
    engine.loadImage(url, image => {
      let width = 17;
      let y = 0;
      let height = 17;
      let animations = ["down", "right", "left", "up"];
      for (let h in animations) {
        let animation = animations[h];
        let x = h * width;
        this.images[animation] = image.get(x, y, width, height);
      }
    });
  }
  draw() {
    let width = page.player.width / 2;
    let height = page.player.height / 2;
    let x = page.player.x - (width / 2);
    let y = page.player.y - height;
    let image = this.images[page.player.animation];
    utils.image(image, x, y, width, height);
  }
}