"use strict";
export default class {
  constructor(x, y, width, height, index) {
    this.setTransform(x, y, width, height);
    this.index = index;
    this.animation = "down";
    this.canNextSprite = false;
    this.sprite = 0;
    this.imgs();
    setInterval(() => {
      this.nextSprite();
    }, 200);
  }
  imgs() {
    this.imgs = { down: [], up: [], left: [], right: [] };
    engine.loadImage(`./player/weapon/${this.index}.png`, img => {
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
          this.imgs[animation][h] = img.get(x, y, width, height);
        }
      }
    });
  }
  setTransform(x, y, width, height) {
    this.transform = { x, y, width, height };
    this.transform.x -= this.transform.width / 2;
    this.transform.y -= this.transform.height / 2;
  }
  draw() {
    let img = this.imgs[this.animation][this.sprite];
    utils.image(img, this.transform.x, this.transform.y, this.transform.width, this.transform.height);
  }
  setAnimation(name) {
    if (this.animation != name) {
      this.sprite = 0;
      this.animation = name;
    }
  }
  nextSprite() {
    if (this.canNextSprite == true) {
      let length;
      switch (this.animation) {
        case "down":
        case "up":
          length = 5;
          break;
        case "left":
        case "right":
          length = 4;
          break;
      }
      if (this.sprite < length) {
        this.sprite++;
      } else {
        this.sprite = 0;
      }
    }
  }
  setCanNextSprite(canNextSprite) {
    this.canNextSprite = canNextSprite;
  }
}