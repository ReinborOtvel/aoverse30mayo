"use strict";
export default class {
  constructor(callback) {
    this.sprite = 0;
    this.maximumSprite = 0;
    let index = metamask.statistics.armor;
    let url = `../assets/player/armor/${index}.png`;
    loadImage(url, img => {
      let parameters = [["down", 6], ["up", 6], ["left", 5], ["right", 5]];
      let width = 25;
      let height = 45;
      for (let iParameters in parameters) {
        let animation = parameters[iParameters][0];
        let numberOfImages = parameters[iParameters][1];
        let y = iParameters * height;
        this[animation] = [];
        for (let iImage = 0; iImage < numberOfImages; iImage++) {
          let x = iImage * width;
          this[animation][iImage] = img.get(x, y, width, height);
        }
      }
      callback();
    });
  }
  draw() {
    let { animation, x, y, width, height } = character.graphics;
    image(this[animation][this.sprite], x, y, width, height);
  }
  changeAnimation() {
    switch (character.graphics.animation) {
      case "up":
      case "down":
        this.sprite = 0;
        this.maximumSprite = 6;
        break;
      case "left":
      case "right":
        this.sprite = 0;
        this.maximumSprite = 5;
        break;
    }
  }
  nextSprite() {
    if (this.sprite == this.maximumSprite) {
      this.sprite = 0;
    } else {
      this.sprite++;
    }
  }
}