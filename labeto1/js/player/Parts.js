"use strict";
import Head from "./Head.js";
import Armor from "./Armor.js";
import Weapon from "./Weapon.js";
export default class {
  constructor(x, y, width, height, statistics) {
    this.transform = { x, y, width, height };
    this.statistics = statistics;
    this.head = new Head(x, y, width, height, this.statistics.head);
    this.armor = new Armor(x, y, width, height, this.statistics.armor);
    this.weapon = new Weapon(x, y, width, height, this.statistics.weapon);
    this.animation = "down";
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