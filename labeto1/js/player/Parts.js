import Head from "./Head.js";
import Armor from "./Armor.js";
import Weapon from "./Weapon.js";
export default class {
  constructor(transform, statistics, fullLoad) {
    this.transform = {};
    this.transform.x = transform.x;
    this.transform.y = transform.y;
    this.transform.width = transform.width;
    this.transform.height = transform.height;
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
    this.transform.x = x;
    this.transform.y = y;
    this.transform.width = width;
    this.transform.height = height;
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