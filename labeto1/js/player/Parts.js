"use strict";
import Head from "./Head.js";
import Armor from "./Armor.js";
import Weapon from "./Weapon.js";
export default class {
  constructor(main) {
    this.main = main;
    this.head = new Head(this.main);
    this.armor = new Armor(this.main);
    this.weapon = new Weapon(this.main);
  }
  setup() {
    this.head.setup();
    this.armor.setup();
    this.weapon.setup();
  }
  draw() {
    this.armor.draw();
    this.head.draw();
    this.weapon.draw();
  }
}