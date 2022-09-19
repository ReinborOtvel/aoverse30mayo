"use strict";
import Head from "./Head.js";
import Armor from "./Armor.js";
import Weapon from "./Weapon.js";
export default class {
  constructor(entity) {
    this.entity = entity;
    this.animation = "down";
    this.sprite = 0;
    this.canNextSprite = false;
    this.head = new Head(this);
    this.armor = new Armor(this);
    this.weapon = new Weapon(this);
    setInterval(() => {
      this.nextSprite();
    }, 200);
  }
  setAnimation(animation) {
    if (animation != this.animation) {
      this.animation = animation;
      this.sprite = 0;
    }
  }
  nextSprite() {
    if (this.canNextSprite) {
      this.sprite++;
      if (this.animation == "down" || this.animation == "up") {
        if (this.sprite >= 6) {
          this.sprite = 0;
        }
      } else if (this.animation == "left" || this.animation == "right") {
        if (this.sprite >= 5) {
          this.sprite = 0;
        }
      }
    }
  }
  draw() {
    this.armor.draw();
    this.head.draw();
    this.weapon.draw();
  }
}