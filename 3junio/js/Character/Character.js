import Armor from "./Armor.js";
import Head from "./Head.js";
import Weapon from "./Weapon.js";
export default class Character {
  constructor(transform, statistics) {
    transform = JSON.parse(JSON.stringify(transform));
    statistics = JSON.parse(JSON.stringify(statistics));
    this.Parts = [
      new Armor(transform, statistics.armor),
      new Head(transform, statistics.head),
      new Weapon(transform, statistics.weapon),
    ];
  }
  nextSprite(ms) {
    for (let index in this.Parts) {
      this.Parts[index].Animation.Sprite.next(ms);
    }
  }
  changeAnimation(name) {
    for (let index in this.Parts) {
      this.Parts[index].Animation.change(name);
    }
  }
  stopAnimation(value) {
    for (let index in this.Parts) {
      this.Parts[index].Animation.stop = value;
    }
  }
  draw() {
    for (let index in this.Parts) {
      this.Parts[index].Image.draw();
    }
  }
}