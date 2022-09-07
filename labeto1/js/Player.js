"use strict";
import Head from "./player/Head.js";
import Armor from "./player/Armor.js";
import Weapon from "./player/Weapon.js";
export default class {
  constructor(transform, statistics, callback) {
    this.transform = transform;
    this.statistics = statistics;
    this.assignParts(callback);
  }
  assignParts(callback) {
    let { head, armor, weapon } = this.statistics;
    this.head = new Head(transform, head, () => {
      this.armor = new Armor(transform, armor, () => {
        this.weapon = new Weapon(transform, weapon, () => {
          callback();
        });
      });
    });
  }
  draw() {
    this.head.draw();
    this.armor.draw();
    this.weapon.draw();
  }
}