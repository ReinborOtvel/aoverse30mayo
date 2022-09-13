import Head from "./Head.js";
import Armor from "./Armor.js";
import Weapon from "./Weapon.js";
export default class {
  constructor(transform, statistics, fullLoad) {
    this.transform = transform;
    this.statistics = statistics;
    this.fullLoad = fullLoad;
    this.animation = "down";
    this.setHead();
  }
  setHead() {
    let index = this.statistics.head;
    this.head = new Head(this.transform, index, () => {
      this.setArmor();
    });
  }
  setArmor() {
    let index = this.statistics.armor;
    this.armor = new Armor(this.transform, index, () => {
      this.setWeapon();
    });
  }
  setWeapon() {
    let index = this.statistics.weapon;
    this.weapon = new Weapon(this.transform, index, () => {
      this.fullLoad();
    });
  }
  setTransform(x, y, width, height) {
    this.transform = { x, y, width, height };
    this.armor.setTransform(x, y, width, height);
    this.head.setTransform(x, y, width, height);
    this.weapon.setTransform(x, y, width, height);
  }
  setAnimation(animation) {
    this.animation = animation;
    this.head.setAnimation(this.animation);
    this.armor.setAnimation(this.animation);
    this.weapon.setAnimation(this.animation);
  }
  setCanNextSprite(canNextSprite) {
    this.canNextSprite = canNextSprite;
    this.armor.setCanNextSprite(this.canNextSprite);
    this.weapon.setCanNextSprite(this.canNextSprite);
  }
  draw() {
    this.armor.draw();
    this.head.draw();
    this.weapon.draw();
  }
}