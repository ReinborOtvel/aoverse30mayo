"use strict";
import Head from "./Head.js";
import Armor from "./Armor.js";
import Weapon from "./Weapon.js";
export default class {
  constructor(x, y, width, height, statistics) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.statistics = statistics;
    this.head = new Head(this.statistics.head, this.x, this.y, this.width, this.height);
    this.armor = new Armor(this.statistics.armor, this.x, this.y, this.width, this.height);
    this.weapon = new Weapon(this.statistics.weapon, this.x, this.y, this.width, this.height);
    setInterval(() => {
      this.nextSprite();
    }, 200);
  }
  canNextSprite(value) {
    this.armor.canNextSprite = value;
    this.weapon.canNextSprite = value;
  }
  animation(newAnimation) {
    this.head.setAnimation(newAnimation);
    this.armor.setAnimation(newAnimation);
    this.weapon.setAnimation(newAnimation);
  }
  setTransform(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.head.setTransform(this.x, this.y, this.width, this.height);
    this.armor.setTransform(this.x, this.y, this.width, this.height);
    this.weapon.setTransform(this.x, this.y, this.width, this.height);
  }
  nextSprite() {
    this.armor.nextSprite();
    this.weapon.nextSprite();
  }
  draw() {
    this.armor.draw();
    this.head.draw();
    this.weapon.draw();
  }
}