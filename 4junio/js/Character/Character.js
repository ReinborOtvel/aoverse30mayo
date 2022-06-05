import Armor from "./Armor.js";
import Head from "./Head.js";
import Weapon from "./Weapon.js";
export default class Character {
  constructor(Transform, statistics) {
    this.statistics = statistics;
    this.Transform = Transform;
    this.Parts = [
      new Armor(this.Transform, this.statistics.armor),
      new Head(this.Transform, this.statistics.head),
      new Weapon(this.Transform, this.statistics.weapon),
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
      this.Parts[index].Animation.stop = value;
    }
  }
  draw(ms, deltaTime) {
    for (let index in this.Parts) {
      this.Parts[index].Image.draw();
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