import Head from "./Head.js";
import Armor from "./Armor.js";
import Weapon from "./Weapon.js";
export default class {
  constructor(transform, statistics, callback) {
    this.statistics = statistics;
    let { head, armor, weapon } = this.statistics;
    this.head = new Head(transform, head, () => {
      this.armor = new Armor(transform, armor, () => {
        this.weapon = new Weapon(transform, weapon, () => {
          callback();
        });
      });
    });
  }
  setTransform(transform) {
    this.armor.setTransform(transform);
    this.head.setTransform(transform);
    this.weapon.setTransform(transform);
  }
  animation(name) {
    this.head.animation = name;
    this.armor.newAnimation(name);
    this.weapon.newAnimation(name);
  }
  canNextSprite(value) {
    this.armor.canNextSprite = value;
    this.weapon.canNextSprite = value;
  }
  draw() {
    this.armor.draw();
    this.head.draw();
    this.weapon.draw();
  }
}