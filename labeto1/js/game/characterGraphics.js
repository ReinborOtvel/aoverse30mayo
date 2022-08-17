"use strict";
class CharacterGraphics {
  changeAnimation() {
    this.armor.changeAnimation();
    this.weapon.changeAnimation();
  }
  draw() {
    this.armor.draw();
    this.head.draw();
    this.weapon.draw();
  }
  setup() {
    setInterval(() => {
      this.armor.nextSprite();
      this.weapon.nextSprite();
    }, 200);
  }
  constructor(callback) {
    this.x = width / 2;
    this.y = height / 2;
    this.width = 100;
    this.height = 100;
    this.animation = "down";
    this.head = new CharacterGraphicsHead(() => {
      this.armor = new CharacterGraphicsArmor(() => {
        this.weapon = new CharacterGraphicsWeapon(() => {
          callback();
        });
      });
    });
  }
};