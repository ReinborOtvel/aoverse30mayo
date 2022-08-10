"use strict";
class Character {
  constructor(metamask) {
    this.metamask = metamask;
  }
  part(name, width, height, callback) {
    let index = this.metamask.statistics[name];
    let url = `../assets/player/${name}/${index}.png`;
    loadImage(url, img => {
      this[name] = img.get(0, 0, width, height);
      callback();
    });
  }
  preload(callback) {
    this.part("head", 17, 17, () => {
      this.part("armor", 25, 45, () => {
        this.part("weapon", 25, 45, () => {
          callback();
        });
      });
    });
  }
  draw() {
    image(this.armor, 340, 40, 200, 200);
    image(this.head, 390, 40, 100, 100);
    image(this.weapon, 340, 40, 200, 200);
  }
}