"use strict";
export default class {
  constructor(transform, index, fullLoad) {
    this.transform = transform;
    this.index = index;
    this.fullLoad = fullLoad;
    this.animation = "down";
    this.canNextSprite = false;
    this.sprite = 0;
    this.setTransform(this.transform.x, this.transform.y, this.transform.width, this.transform.height);
    this.setImgs();
    setInterval(() => {
      this.nextSprite();
    }, 200);
  }
  setImgs() {
    this.imgs = { down: [], up: [], left: [], right: [] };
    let url = `./Graficos/player/armor/${this.index}.png`;
    engine.loadImage(url, img => {
      this.loadImg(img);
    });
  }
  loadImg(img) {
    let width = 25;
    let height = 45;
    for (let i = 0; i < 6; i++) {
      let x = i * width;
      this.imgs.down[i] = img.get(x, 0, width, height);
      this.imgs.up[i] = img.get(x, height, width, height);
      if (i < 5) {
        this.imgs.left[i] = img.get(x, 2 * height, width, height);
        this.imgs.right[i] = img.get(x, 3 * height, width, height);
      }
    }
    this.fullLoad();
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
    if (data.canDraw == true && this.canNextSprite == true) {
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