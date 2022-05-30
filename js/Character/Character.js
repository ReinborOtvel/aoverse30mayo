import Armor from "./Armor.js";
import Head from "./Head.js";
import Weapon from "./Weapon.js";
export default class Character {
  constructor(transform, statistics) {
    transform = JSON.parse(JSON.stringify(transform));
    this.Parts = [
      new Armor(transform, statistics.armor),
      new Head(transform, statistics.head),
      new Weapon(transform, statistics.weapon),
    ];
  }
  draw() {
    for (let index in this.Parts) {
      this.Parts[index].Image.draw();
    }
  }
}