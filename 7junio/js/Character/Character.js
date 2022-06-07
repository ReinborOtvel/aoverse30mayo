import Armor from "./Armor.js";
import Head from "./Head.js";
import Weapon from "./Weapon.js";
export default class Character {
  constructor(Transform, statistics) {
    this.statistics = statistics;
    this.Parts = [
      new Armor(Transform, statistics.armor),
      new Head(Transform, statistics.head),
      new Weapon(Transform, statistics.weapon),
    ];
  }
  nextSprite(ms, deltaTime) {
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
      this.Parts[index].Animation.Sprite.stop = value;
    }
  }
  update(ms, deltaTime) {
    for (let index in this.Parts) {
      this.Parts[index].Image.update();
    }
  }
  turn() {
    let nameAnimations = ["down", "right", "up", "left"];
    let nameAnimation = this.Parts[0].Animation.name;
    let index = nameAnimations.indexOf(nameAnimation) + 1;
    if (index >= nameAnimations.length) {
      index = 0;
    }
    this.changeAnimation(nameAnimations[index]);
  }
}