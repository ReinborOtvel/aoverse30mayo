"use strict";
export default class {
  constructor(main) {
    this.main = main;
  }
  setup() {
    this.setImages();
  }
  setImages() {
    this.images = { down: [], up: [], left: [], right: [] };
    let index = this.main.statistics.weapon;
    let url = `./player/weapon/${index}.png`;
    engine.loadImage(url, image => {
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
    let { x, y, width, height, sprite, animation } = this.main;
    x -= width / 2;
    y -= height / 2;
    let image = this.images[animation][sprite];
    utils.image(image, x, y, width, height);
  }
}