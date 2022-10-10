"use strict";
export default class {
  constructor(index) {
    this.setImages();
  }
  setImages() {
    this.images = { down: [], up: [], left: [], right: [] };
    let index = this.main.statistics.armor;
    let url = `./player/armor/${index}.png`;
    engine.loadImage(url, image => {
      let width = 25;
      let height = 45;
      let animations = ["down", "up", "left", "right"];
      let lengths = [6, 6, 5, 5];
      for (let v in animations) {
        let animation = animations[v];
        let length = lengths[v];
        let y = height * v;
        for (let h = 0; h < length; h++) {
          let x = h * width;
          this.images[animation][h] = image.get(x, y, width, height);
        }
      }
    });
  }
  draw() {
    let { animation, sprite, x, y, width, height } = this.main;
    let image = this.images[animation][sprite];
    x -= width / 2;
    y -= height / 2;
    utils.image(image, x, y, width, height);
  }
}