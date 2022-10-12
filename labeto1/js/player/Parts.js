"use strict";
import Head from "./Head.js";
import Armor from "./Armor.js";
import Weapon from "./Weapon.js";
export default class {
  constructor(x, y, width, height, statistics) {
    this.head = new Head(x, y, width, height, statistics.head);
    this.armor = new Armor(x, y, width, height, statistics.armor);
    this.weapon = new Weapon(x, y, width, height, statistics.weapon);
  }
  transform() {
    this.head.animations.transform.setTransform(x, y, width, height);
  }
  draw() {
    this.armor.draw();
    this.head.draw();
    this.weapon.draw();
  }
}