"use strict";
import Parts from "./Parts.js";
import Buttons from "./Buttons.js";
import WheelMovement from "./WheelMovement.js";
import Life from "./Life.js";
import Hunger from "./Hunger.js";
import Thirsty from "./Thirsty.js";
export default class {
  constructor(transform, statistics, map, fullLoad) {
    this.transform = transform;
    this.statistics = statistics;
    this.map = map;
    this.fullLoad = fullLoad;
    this.x = 2024;
    this.y = 1452;
    this.xMove = 0;
    this.yMove = 0;
    this.speed = 6;
    this.setParts();
    this.wheelMovement = new WheelMovement();
    this.life = new Life();
    this.hunger = new Hunger();
    this.thirsty = new Thirsty();
  }
  setParts() {
    this.parts = new Parts(this.transform, this.statistics, () => {
      this.buttons = new Buttons(() => {
        this.fullLoad();
      });
    });
  }
  changeMotion(x, y) {
    this.xMove = x;
    this.yMove = y;
    this.animationMove();
    this.wheelMovement.position(this.xMove, this.yMove);
  }
  animationMove() {
    if (this.yMove == 0 && this.xMove == 0) {
      this.parts.setCanNextSprite(false);
    } else {
      this.parts.setCanNextSprite(true);
      if (this.yMove == -1) {
        this.parts.setAnimation("up");
      }
      else if (this.yMove == 1) {
        this.parts.setAnimation("down");
      }
      else if (this.xMove == -1) {
        this.parts.setAnimation("left");
      }
      else if (this.xMove == 1) {
        this.parts.setAnimation("right");
      }
    }
  }
  touchStarted() {
    this.touchMoved();
  }
  touchMoved() {
    if (utils.verifyClick(4, 57, 9, 66)) {
      this.changeMotion(-1, -1);
    }
    else if (utils.verifyClick(12, 57, 17, 66)) {
      this.changeMotion(0, -1);
    }
    else if (utils.verifyClick(20, 57, 25, 66)) {
      this.changeMotion(1, -1);
    }
    else if (utils.verifyClick(20, 70, 25, 79)) {
      this.changeMotion(1, 0);
    }
    else if (utils.verifyClick(20, 83, 25, 92)) {
      this.changeMotion(1, 1);
    }
    else if (utils.verifyClick(12, 83, 17, 92)) {
      this.changeMotion(0, 1);
    }
    else if (utils.verifyClick(4, 83, 9, 92)) {
      this.changeMotion(-1, 1);
    }
    else if (utils.verifyClick(4, 70, 9, 79)) {
      this.changeMotion(-1, 0);
    }
  }
  touchEnded() {
    this.changeMotion(0, 0);
    if (utils.verifyClick(68, 74, 77, 87)) {
      this.button = "x";
    } else if (utils.verifyClick(78, 66, 87, 79)) {
      this.button = "y";
    } else if (utils.verifyClick(78, 82, 87, 95)) {
      this.button = "a";
    } else if (utils.verifyClick(88, 74, 97, 87)) {
      this.button = "b";
    }
  }
  keyTyped() {
    switch (events.key) {
      case "w":
        this.changeMotion(this.xMove, -1);
        break;
      case "s":
        this.changeMotion(this.xMove, 1);
        break;
      case "a":
        this.changeMotion(-1, this.yMove);
        break;
      case "d":
        this.changeMotion(1, this.yMove);
        break;
    }
  }
  keyReleased() {
    switch (events.key) {
      case "w":
      case "s":
        this.changeMotion(this.xMove, 0);
        break;
      case "a":
      case "d":
        this.changeMotion(0, this.yMove);
        break;
    }
  }
  setTransform(x, y, width, height) {
    this.transform = { x, y, width, height };
    this.parts.setTransform(x, y, width, height);
  }
  move() {
    let newX = this.x;
    let newY = this.y;
    let xSpeed = this.xMove * this.speed;
    let ySpeed = this.yMove * this.speed;
    if (xSpeed != 0 || ySpeed != 0) {
      newX += xSpeed;
      newY += ySpeed;
      if (this.map.collision(newX, newY) == false) {
        this.x = newX;
        this.y = newY;
      }
    }
  }
  draw() {
    this.parts.draw();
    this.move();
    this.wheelMovement.draw();
    this.buttons.draw();
    this.life.draw();
    this.hunger.draw();
    this.thirsty.draw();
  }
}