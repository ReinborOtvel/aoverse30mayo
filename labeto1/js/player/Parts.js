"use strict";
import Head from "./Head.js";
import Armor from "./Armor.js";
import Weapon from "./Weapon.js";
export default class {
  constructor() {
    this.head = new Head();
    this.armor = new Armor();
    this.weapon = new Weapon();
  }
  draw() {
    this.armor.draw();
    this.head.draw();
    this.weapon.draw();
  }
}