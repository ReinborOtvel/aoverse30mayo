"use strict";
import Head from "./Head.js";
import Armor from "./Armor.js";
import Weapon from "./Weapon.js";
export default class {
  constructor(x, y, width, height, statistics) {
    this.head = new Head(statistics.head, x, y, width, height);
    this.armor = new Armor(statistics.armor, x, y, width, height);
    this.weapon = new Weapon(statistics.weapon, x, y, width, height);
    setInterval(() => {
      this.nextSprite();
    }, 200);
  }
  canNextSprite(value) {
    this.head.canNextSprite = value;
    this.armor.canNextSprite = value;
    this.weapon.canNextSprite = value;
  }
  animation(newAnimation) {
    this.head.setAnimation(newAnimation);
    this.armor.setAnimation(newAnimation);
    this.weapon.setAnimation(newAnimation);
  }
  setTransform(x, y, width, height) {
    this.head.setTransform(x, y, width, height);
    this.armor.setTransform(x, y, width, height);
    this.weapon.setTransform(x, y, width, height);
  }
  nextSprite() {
    this.head.nextSprite();
    this.armor.nextSprite();
    this.weapon.nextSprite();
  }
  draw() {
    this.armor.draw();
    this.head.draw();
    this.weapon.draw();
  }
}