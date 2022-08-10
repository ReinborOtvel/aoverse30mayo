"use strict";
class Character {
  constructor(metamask) {
    this.metamask = metamask;
    this.head = new Head(metamask, this);
    this.armor = new Armor(metamask, this);
    this.weapon = new Weapon(metamask, this);
  }
  setup() {
    this.animation = "down";
    this.x = width / 2;
    this.y = height / 2;
    this.xMap = 0;
    this.yMap = 0;
    this.yMove = 0;
    this.xMove = 0;
    this.speedY = 1;
    this.speedX = 1;
    this.width = 100;
    this.height = 100;
    this.head.setup();
    this.armor.setup();
    this.weapon.setup();
    setTimeout()
  }
  keyReleased() {
    print(keyCode);
    switch (keyCode) {
      case 87:
      case 83:
        this.yMove = 0;
        break;
      case 65:
      case 68:
        this.xMove = 0;
        break;
    }
  }
  updateAnimation() {
    switch (this.yMove) {
      case -1:
        this.animation = "up";
        break;
      case 1:
        this.animation = "down";
        break;
      case 0:
        switch (this.xMove) {
          case -1:
            this.animation = "left";
            break;
          case 1:
            this.animation = "right";
            break;
        }
    }
    this.head.updateAnimation();
    this.armor.updateAnimation();
    this.weapon.updateAnimation();
  }
  keyPressed() {
    print(keyCode);
    switch (keyCode) {
      case 87:
        this.yMove = -1;
        break;
      case 83:
        this.yMove = 1;
        break;
      case 65:
        this.xMove = -1;
        break;
      case 68:
        this.xMove = 1;
        break;
    }
  }
  move() {
    let newX = this.xMap;
    let newY = this.yMap;
    newX += this.xMove * this.speedX;
    newY += this.yMove * this.speedY;
    this.xMap = newX;
    this.yMap = newY;
  }
  preload(callback) {
    this.head.preload(() => {
      this.armor.preload(() => {
        this.weapon.preload(() => {
          callback();
        });
      });
    });
  };
  draw() {
    this.armor.draw();
    this.head.draw();
    this.weapon.draw();
    this.move();
  }
};